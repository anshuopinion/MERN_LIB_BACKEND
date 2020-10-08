import mongoose from "mongoose";

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 4 },
  mobile: { type: Number, required: true },
});

export default mongoose.model("teacher", teacherSchema);
