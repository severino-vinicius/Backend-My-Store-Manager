const checkValidation = (body, requireProperty) => {
  for (let i = 0; i < body.length; i += 1) {
    const item = body[i];

    if (!(requireProperty in item)) {
      return `"${requireProperty}" is required`;
    }
  }
};
module.exports = {
  checkValidation,
};