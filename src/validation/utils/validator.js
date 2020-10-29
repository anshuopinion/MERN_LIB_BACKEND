import HttpError from "../../model/http-error.js";
const validator = async (schemaName, body, next) => {
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
