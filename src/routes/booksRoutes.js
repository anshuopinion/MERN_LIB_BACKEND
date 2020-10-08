import express from "express";
import { createBook, getBooks } from "../controllers/booksControllers.js";
const router = express.Router();

router.get("", getBooks);

router.post("",createBook);

export default router;