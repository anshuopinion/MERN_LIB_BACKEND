import { schema } from "./userSchema.js";
import validator from "../utils/validator.js";
import { RequestHandler } from "express";
// export const signupValidation:RequestHandler = (req,res,next) => validator (schema.signupUser,req.body,next);
export const loginValidation: RequestHandler = (req, res, next) =>
  validator(schema.loginUser, req.body, next);
