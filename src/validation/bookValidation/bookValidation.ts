import { RequestHandler } from "express";
import validator from "../utils/validator";
import { bookValidationSchema } from "./bookSchema";

export const createBookValidation: RequestHandler = (req, res, next) =>
  validator(bookValidationSchema.createBook, req.body, next);
export const updateBookValidation: RequestHandler = (req, res, next) =>
  validator(bookValidationSchema.updateBook, req.body, next);
