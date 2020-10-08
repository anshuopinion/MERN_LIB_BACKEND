import express from "express";
import { createBook, deleteBook, getBook, getBooks, getBooksByStudentId, updateBook } from "../controllers/booksControllers.js";
const router = express.Router();

router.get("/", getBooks);
router.get('/:bid',getBook);
router.get('/:student/:sid',getBooksByStudentId);
router.post("/",createBook);
router.patch('/:bid',updateBook);
router.delete('/:bid',deleteBook);


export default router;