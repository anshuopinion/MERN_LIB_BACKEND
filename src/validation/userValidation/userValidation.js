
import {schema} from './userSchema.js';
import validator from '../utils/validator.js';
export const signupValidation = (req,res,next) => validator (schema.signupUser,req.body,next);
export const loginValidation  =  (req,res,next) => validator(schema.loginUser,req.body,next);