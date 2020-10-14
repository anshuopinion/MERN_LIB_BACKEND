import Joi from "joi";

export const schema = {
  loginUser: Joi.object({
    email: Joi.string().lowercase().email(),
    password: Joi.string().min(6),
  }),
};
