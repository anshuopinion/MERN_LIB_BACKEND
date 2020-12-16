import Joi from "joi";

export const teacherValidationSchema = {
  signupTeacher: Joi.object({
    name: Joi.string().min(1).required(),
    email: Joi.string().lowercase().email(),
    password: Joi.string().min(6),
    mobile: Joi.number().min(1000000000).max(9999999999).required(),
  }),
};
