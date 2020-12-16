import mongoose, { Document, Schema } from "mongoose";

export interface IBook extends Document {
  name: string;
  author: string;
  book_image: string;
  book_id: number;
  total_books: number;
  issue: boolean;
}

const bookSchema: Schema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  book_image: { type: String, required: true },
  total_books: { type: Number, required: true },
  issue: { type: Boolean, required: true },
  book_id: { type: Number, required: true },
});

export default mongoose.model<IBook>("book", bookSchema);
