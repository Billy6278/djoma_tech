const jwt = require('jsonwebtoken');

const signToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET || 'djoma_tech_secret_key_2026_jwt_token', {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'djoma_tech_secret_key_2026_jwt_token');
  } catch (error) {
    return null;
  }
};

module.exports = {
  signToken,
  verifyToken,
};
