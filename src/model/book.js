import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  bookImage: { type: String, required: true },
  totalBook: { type: Number, required: true },
  issue: { type: Boolean, required: true },
  bookId: { type: Number, required: true },
});

export default mongoose.model("book", bookSchema);
