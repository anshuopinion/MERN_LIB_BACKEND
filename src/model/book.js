import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  book_image: { type: String, required: true },
  total_books: { type: Number, required: true },
  issue: { type: Boolean, required: true },
  book_id: { type: Number, required: true },
});

export default mongoose.model("book", bookSchema);
