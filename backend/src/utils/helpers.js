/**
 * Helper to structure standardized API JSON responses
 */
const formatResponse = (success, message, data = null, errors = null) => {
  return {
    success,
    message,
    data,
    errors
  };
};

module.exports = {
  formatResponse
};
