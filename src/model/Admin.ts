import mongoose, { Schema } from "mongoose";
import { IUser } from "./User";

export interface IAdmin extends IUser {
  mobile: number;
}

const adminSchema: Schema = new Schema({
  mobile: { type: Number, required: true },
});

export default mongoose.model<IAdmin>("admin", adminSchema);
