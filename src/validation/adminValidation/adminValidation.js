
import validator from '../utils/validator.js'
import { adminValidationSchema } from './adminSchema.js'

export const signupAdminValidation = (req,res,next) => validator(adminValidationSchema.signupTeacher,req.body,next);