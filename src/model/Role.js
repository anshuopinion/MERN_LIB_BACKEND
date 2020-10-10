import { Schema, model } from "mongoose";

const roleSchema = new Schema({
  name: { string: true },
});

export default model("role", roleSchema);
