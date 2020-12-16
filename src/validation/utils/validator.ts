import { NextFunction } from "express";
import Joi from "joi";
import HttpError from "../../model/http-error";

const validator = async (
  schemaName: Joi.ObjectSchema,
  body: object,
  next: NextFunction
) => {
  const value = await schemaName.validate(body);

  try {
    value.error
      ? next(new HttpError(value.error.details[0].message, 422))
      : next();
  } catch (error) {
    console.log(error);
  }
};

export default validator;
