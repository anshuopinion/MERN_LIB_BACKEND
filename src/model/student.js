import mongoose from "mongoose";

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  student_id: { type: Number, required: true },
  mobile: { type: Number, required: true },
  university_id: { type: Number, required: true },
  library_card: { type: Number, required: true },
  semester: { type: Number, required: true },
  year: { type: Number, required: true },
  // books:[{type:Schema.Types.ObjectId,ref:'book'}]
});

export default mongoose.model("student", studentSchema);
