import { RequestHandler } from "express";
import validator from "../utils/validator.js";
import { studentValidationSchema } from "./studentSchema.js";
export const signupValidation: RequestHandler = (req, res, next) =>
  validator(studentValidationSchema.createStudent, req.body, next);
export const updateStudentValidation: RequestHandler = (req, res, next) =>
  validator(studentValidationSchema.updateStudent, req.body, next);
