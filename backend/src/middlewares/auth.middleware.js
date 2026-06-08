const { verifyToken } = require('../utils/jwt.utils');
const { formatResponse } = require('../utils/helpers');
const { HTTP_STATUS } = require('../utils/constants');
const db = require('../models');

const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(HTTP_STATUS.UNAUTHORIZED).json(
      formatResponse(false, 'Accès non autorisé, jeton manquant')
    );
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(HTTP_STATUS.UNAUTHORIZED).json(
      formatResponse(false, 'Accès non autorisé, jeton invalide')
    );
  }

  try {
    const user = await db.User.findByPk(decoded.id);
    if (!user) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json(
        formatResponse(false, 'Utilisateur non trouvé')
      );
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json(
      formatResponse(false, 'Erreur de vérification d\'authentification')
    );
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(HTTP_STATUS.FORBIDDEN).json(
        formatResponse(false, 'Accès interdit, privilèges insuffisants')
      );
    }
    next();
  };
};

module.exports = {
  protect,
  authorize,
};
