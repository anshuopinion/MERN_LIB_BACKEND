import mongoose from "mongoose";

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  studentId: { type: Number, required: true },
  mobile: { type: Number, required: true },
  universityId: { type: Number, required: true },
  libCard: { type: Number, required: true },
  semester: { type: Number, required: true },
  year: { type: Number, required: true },
  // books:[{type:Schema.Types.ObjectId,ref:'book'}]
});

export default mongoose.model("student", studentSchema);
