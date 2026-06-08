const db = require('../models');
const bcrypt = require('bcryptjs');
const { formatResponse } = require('../utils/helpers');
const { HTTP_STATUS } = require('../utils/constants');

const getAllUsers = async (req, res, next) => {
  try {
    const users = await db.User.findAll({
      attributes: { exclude: ['password'] },
      order: [['createdAt', 'DESC']],
    });
    res.status(HTTP_STATUS.OK).json(
      formatResponse(true, 'Liste des utilisateurs récupérée', { users })
    );
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await db.User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] },
    });
    if (!user) {
      return res.status(HTTP_STATUS.NOT_FOUND).json(
        formatResponse(false, 'Utilisateur non trouvé')
      );
    }
    res.status(HTTP_STATUS.OK).json(
      formatResponse(true, 'Utilisateur récupéré', { user })
    );
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    const existingUser = await db.User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json(
        formatResponse(false, 'Un utilisateur avec cet email existe déjà')
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await db.User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: role || 'USER',
    });

    const userResponse = {
      id: newUser.id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      role: newUser.role,
      createdAt: newUser.createdAt,
    };

    res.status(HTTP_STATUS.CREATED).json(
      formatResponse(true, 'Utilisateur créé avec succès', { user: userResponse })
    );
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;
    const user = await db.User.findByPk(req.params.id);

    if (!user) {
      return res.status(HTTP_STATUS.NOT_FOUND).json(
        formatResponse(false, 'Utilisateur non trouvé')
      );
    }

    // Authorization: Admin or own user
    if (req.user.role !== 'ADMIN' && req.user.id !== user.id) {
      return res.status(HTTP_STATUS.FORBIDDEN).json(
        formatResponse(false, 'Accès interdit, modification non autorisée')
      );
    }

    if (email && email !== user.email) {
      const existingUser = await db.User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json(
          formatResponse(false, 'Cet email est déjà utilisé')
        );
      }
      user.email = email;
    }

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    
    // Only ADMIN can change roles
    if (role && req.user.role === 'ADMIN') {
      user.role = role;
    }

    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    await user.save();

    const userResponse = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
      updatedAt: user.updatedAt,
    };

    res.status(HTTP_STATUS.OK).json(
      formatResponse(true, 'Utilisateur mis à jour avec succès', { user: userResponse })
    );
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const user = await db.User.findByPk(req.params.id);
    if (!user) {
      return res.status(HTTP_STATUS.NOT_FOUND).json(
        formatResponse(false, 'Utilisateur non trouvé')
      );
    }

    // Cannot delete oneself
    if (req.user.id === user.id) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json(
        formatResponse(false, 'Vous ne pouvez pas supprimer votre propre compte')
      );
    }

    await user.destroy();
    res.status(HTTP_STATUS.OK).json(
      formatResponse(true, 'Utilisateur supprimé avec succès')
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
