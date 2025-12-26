import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    status:{ type: String, enum: ["OPEN", "DRAWN"], default: "OPEN" },
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
