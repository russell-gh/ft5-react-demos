import Joi from "joi";
import { loginSchema, signupSchema } from "./schemas";
import { joiErrorToObject } from "./utils";

export const validate = async (formData, schema) => {
  let _joi = nameToSchema(schema);

  try {
    await _joi.validateAsync(formData, { abortEarly: false }); //see all errors
    return {};
  } catch (e) {
    return joiErrorToObject(e);
  }
};

const nameToSchema = (schema) => {
  switch (schema) {
    case "login":
      return Joi.object(loginSchema);

    case "signup":
      return Joi.object(signupSchema);

    default:
      break;
  }
};
