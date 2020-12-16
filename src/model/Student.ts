import mongoose, { Schema } from "mongoose";
import { IBook } from "./Book";
import { IUser } from "./User";

export interface IStudent extends IUser {
  student_id: number;
  mobile: number;
  university_id: number;
  library_card: number;
  semester: number;
  year: number;
  requestedBooks: IBook["_id"];
}

const studentSchema: Schema = new Schema({
  student_id: { type: Number, required: true },
  mobile: { type: Number, required: true },
  university_id: { type: Number, required: true },
  library_card: { type: Number, required: true },
  semester: { type: Number, required: true },
  year: { type: Number, required: true },
  // books:[{type:Schema.Types.ObjectId,ref:'book'}]
  requestedBooks: [
    { type: mongoose.Types.ObjectId, required: true, ref: "book" },
  ],
});

export default mongoose.model<IStudent>("student", studentSchema);
