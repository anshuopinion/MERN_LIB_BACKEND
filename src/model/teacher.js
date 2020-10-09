import mongoose from "mongoose";

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  mobile: { type: Number, required: true },
});

export default mongoose.model("teacher", teacherSchema);
