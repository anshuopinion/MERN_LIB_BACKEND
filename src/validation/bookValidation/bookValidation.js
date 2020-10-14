import validator from "../utils/validator.js";
import { bookValidationSchema } from "./bookSchema.js";

export const createBookValidation = (req, res, next) =>
  validator(bookValidationSchema.createBook, req.body, next);
