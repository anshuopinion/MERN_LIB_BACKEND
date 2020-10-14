import validator from "../utils/validator.js";
import { teacherValidationSchema } from "./teacherSchema.js";

export const signupTeacherValidation = (req, res, next) =>
  validator(teacherValidationSchema.signupTeacher, req.body, next);
