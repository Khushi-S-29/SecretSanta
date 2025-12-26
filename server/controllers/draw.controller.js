import Event from "../models/Event.js";
import Participant from "../models/Participant.js";
import Assignment from "../models/Assignment.js";
import { generateAssignments } from "../services/assignment.service.js";
import { sendAssignmentEmail } from "../services/email.service.js";

export const drawNames = async (req, res) => {
  try {
    const { eventId } = req.params;
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    if (event.status === "DRAWN") {
      return res.status(200).json({
        message: "Draw already completed. Assignments are locked.",
      });
    }

    const participants = await Participant.find({ eventId });
    if (participants.length < 3) {
      return res.status(400).json({
        message: "minimum 3 participants required",
      });
    }
    const pairs = generateAssignments(participants);

    for (const pair of pairs) {
      await Assignment.create({
        eventId,
        santaId: pair.santa._id,
        receiverId: pair.receiver._id,
      });

      await sendAssignmentEmail(pair.santa, pair.receiver);
    }
    event.status = "DRAWN";
    await event.save();
    res.json({
      message: "Draw completed successfully. Assignments locked.",
    });
  } catch (error) {
    console.error("draw err:", error);
    res.status(500).json({
      message: "Draw failed",
      error: error.message,
    });
  }
};
