import validator from "../utils/validator.js";
import { studentValidationSchema } from "./studentSchema.js";
export const signupValidation = (req, res, next) =>
  validator(studentValidationSchema.createStudent, req.body, next);