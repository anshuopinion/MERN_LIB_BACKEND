import Joi from "joi";
export const bookValidationSchema = {
  createBook: Joi.object({
    name: Joi.string().min(3).max(50).required(),
    author: Joi.string().min(3).max(50).required(),
    // bookImage:Joi.string().not().empty().required(),
    total_books: Joi.number().required(),
    issue: Joi.boolean().required(),
    book_id: Joi.number().required(),
  }),
  updateBook: Joi.object({
    name: Joi.string().min(3).max(50),
    author: Joi.string().min(3).max(50),
    // bookImage:Joi.string().not().empty(),
    total_books: Joi.number(),
    issue: Joi.boolean(),
    book_id: Joi.number(),
  }),
};
