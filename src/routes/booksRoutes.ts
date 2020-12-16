import express from "express";
import {
  createBook,
  deleteBook,
  getBook,
  getBooks,
  getBooksByStudentId,
  updateBook,
  issueBook,
} from "../controllers/booksControllers.js";
// import { checkRole, userAuth } from "../utils/Auth.js";
import {
  createBookValidation,
  updateBookValidation,
} from "../validation/bookValidation/bookValidation.js";
const router = express.Router();

// userAuth, checkRole(["student"])
router.get("/", getBooks);
router.get("/:bid", getBook);
router.get("/:student/:sid", getBooksByStudentId);
router.get("/:bid/student/:id", issueBook);
router.post("/", createBookValidation, createBook);
router.patch("/:bid", updateBookValidation, updateBook);
router.delete("/:bid", deleteBook);

export default router;
