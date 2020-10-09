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
const router = express.Router();

router.get("/", userAuth, checkRole(["student"]), getBooks);
router.get("/:bid", getBook);
router.get("/:student/:sid", getBooksByStudentId);
router.post("/", createBook);
router.patch("/:bid", updateBook);
router.delete("/:bid", deleteBook);

export default router;
