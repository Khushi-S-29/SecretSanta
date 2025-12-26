import Participant from "../models/Participant.js";

export const addParticipant = async (req, res) => {
  const { eventId, name, email, wishlist } = req.body;
  const participant =await Participant.create({
    eventId,
    name,
    email,
    wishlist,
  });

  res.status(201).json(participant);
};
