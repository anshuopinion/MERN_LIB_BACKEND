import mongoose from "mongoose";

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  mobile: { type: Number, required: true },
});

export default mongoose.model("admin", adminSchema);
