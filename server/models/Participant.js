import mongoose from "mongoose";

const participantSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  name: { type: String, required: true },
  email: { type: String, required: true },
  wishlist: { type: String },
});

participantSchema.index({ eventId: 1, email: 1 }, { unique: true });

export default mongoose.model("Participant", participantSchema);
