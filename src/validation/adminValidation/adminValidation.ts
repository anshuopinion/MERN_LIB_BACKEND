import { RequestHandler } from "express";
import validator from "../utils/validator.js";
import { adminValidationSchema } from "./adminSchema.js";

export const signupAdminValidation: RequestHandler = (req, res, next) =>
  validator(adminValidationSchema.signupTeacher, req.body, next);
