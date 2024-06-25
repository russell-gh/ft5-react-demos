import Joi from "joi";

export const loginSchema = {
  email: Joi.string().email({ tlds: { allow: false } }),
  password: Joi.string().min(8).max(32),
};

export const signupSchema = {
  email: Joi.string().email({ tlds: { allow: false } }),
  password: Joi.string().min(8).max(32),
  userName: Joi.string().min(6).max(12),
};
