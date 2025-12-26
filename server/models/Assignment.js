import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  eventId: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"Event",
    required:true,
  },
  santaId:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Participant",
    required: true,
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Participant",
    required: true,
  },
});

export default mongoose.model("Assignment", assignmentSchema);
