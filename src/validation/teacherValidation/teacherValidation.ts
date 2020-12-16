import { RequestHandler } from "express";
import validator from "../utils/validator.js";
import { teacherValidationSchema } from "./teacherSchema.js";

export const signupTeacherValidation: RequestHandler = (req, res, next) =>
  validator(teacherValidationSchema.signupTeacher, req.body, next);
