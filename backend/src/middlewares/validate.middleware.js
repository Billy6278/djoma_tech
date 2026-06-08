const { formatResponse } = require('../utils/helpers');
const { HTTP_STATUS } = require('../utils/constants');

const validate = (validatorFn) => {
  return (req, res, next) => {
    const errors = validatorFn(req.body);
    if (errors && errors.length > 0) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json(
        formatResponse(false, 'Validation des données échouée', null, errors)
      );
    }
    next();
  };
};

module.exports = validate;
