import Joi from "joi";

export const studentValidationSchema = {
  createStudent: Joi.object({
    name: Joi.string().min(1).required(),
    email: Joi.string().lowercase().email(),
    password: Joi.string().min(6),
    student_id: Joi.number().required(),
    mobile: Joi.number().min(1000000000).max(9999999999).required(),
    university_id: Joi.number().required(),
    library_card: Joi.number().max(1000),
    semester: Joi.number().min(1).max(8),
    year: Joi.number().min(1928).max(2020),
  }),
  updateStudent: Joi.object({
    name: Joi.string().min(1),
    student_id: Joi.number(),
    mobile: Joi.number().min(1000000000).max(9999999999),
    university_id: Joi.number(),
    library_card: Joi.number().max(1000),
    semester: Joi.number().min(1).max(8),
    year: Joi.number().min(1928).max(2020),
  }),
};
