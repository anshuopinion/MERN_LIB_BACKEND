import Joi from "joi";

export const studentValidationSchema = {
  createStudent: Joi.object({
    name: Joi.string().min(1).required(),
    email: Joi.string().lowercase().email(),
    password: Joi.string().min(6),
    studentId: Joi.number().required(),
    mobile: Joi.number().min(1000000000).max(9999999999).required(),
    universityId: Joi.number().required(),
    libCard: Joi.number().max(1000),
    semester: Joi.number().min(1).max(8),
    year: Joi.number().min(1928).max(2020),
  }),
};
