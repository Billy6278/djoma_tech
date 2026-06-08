const authService = require('../services/auth.service');
const { formatResponse } = require('../utils/helpers');
const { HTTP_STATUS } = require('../utils/constants');

const register = async (req, res, next) => {
  try {
    const result = await authService.registerUser(req.body);
    res.status(HTTP_STATUS.CREATED).json(
      formatResponse(true, 'Inscription réussie', result)
    );
  } catch (error) {
    res.status(HTTP_STATUS.BAD_REQUEST).json(
      formatResponse(false, error.message)
    );
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await authService.loginUser(email, password);
    res.status(HTTP_STATUS.OK).json(
      formatResponse(true, 'Connexion réussie', result)
    );
  } catch (error) {
    res.status(HTTP_STATUS.UNAUTHORIZED).json(
      formatResponse(false, error.message)
    );
  }
};

const me = async (req, res, next) => {
  try {
    const user = {
      id: req.user.id,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
      role: req.user.role,
      createdAt: req.user.createdAt,
    };
    res.status(HTTP_STATUS.OK).json(
      formatResponse(true, 'Profil récupéré avec succès', { user })
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  me,
};
