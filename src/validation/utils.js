export const joiErrorToObject = (e) => {
  const errorsMod = {};

  e.details.forEach((error) => {
    errorsMod[error.context.key] = error.message;
  });

  return errorsMod;
};
