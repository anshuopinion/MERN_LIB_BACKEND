import Joi from 'joi'
export const bookValidationSchema = {
    createBook:Joi.object({
        name:Joi.string().min(3).max(50).required(),
        author:Joi.string().min(3).max(50).required(),
        // bookImage:Joi.string().not().empty().required(),
        totalBook:Joi.number().required(),
        issue:Joi.boolean().required(),
        bookId:Joi.number().required()
    })
}