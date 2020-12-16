import mongoose, { Schema } from "mongoose";
import { IUser } from "./User";

export interface ITeacher extends IUser {
  mobile: number;
}
const teacherSchema: Schema = new Schema({
  mobile: { type: Number, required: true },
});

export default mongoose.model<ITeacher>("teacher", teacherSchema);
