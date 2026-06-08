const { formatResponse } = require('../utils/helpers');
const { HTTP_STATUS } = require('../utils/constants');
const logger = require('../config/logger');

const errorHandler = (err, req, res, next) => {
  logger.error(err.stack || err.message);

  const statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Une erreur interne est survenue sur le serveur';

  res.status(statusCode).json(
    formatResponse(
      false, 
      message, 
      null, 
      process.env.NODE_ENV === 'production' ? null : { details: err.message, stack: err.stack }
    )
  );
};

module.exports = errorHandler;
