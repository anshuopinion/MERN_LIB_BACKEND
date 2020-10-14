import express from "express";
import {
  createBook,
  deleteBook,
  getBook,
  getBooks,
  getBooksByStudentId,
  updateBook,
} from "../controllers/booksControllers.js";
import { checkRole, userAuth } from "../utils/Auth.js";
import { createBookValidation } from "../validation/bookValidation/bookValidation.js";
const router = express.Router();
// userAuth, checkRole(["student"])
router.get("/",  getBooks);
router.get("/:bid", getBook);
router.get("/:student/:sid", getBooksByStudentId);
router.post("/", createBookValidation, createBook);
router.patch("/:bid", updateBook);
router.delete("/:bid", deleteBook);

export default router;
