import mongoose from "mongoose";

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 4 },
  studentId: { type: Number, required: true },
  mobile: { type: Number, required: true },
  universityId: { type: Number, required: true },
  libCard: { type: Number, required: true },
  semester: { type: Number, required: true },
  year: { type: Number, required: true },
});

export default mongoose.model("student", studentSchema);
