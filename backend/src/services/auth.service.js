const bcrypt = require('bcryptjs');
const db = require('../models');
const { signToken } = require('../utils/jwt.utils');

const registerUser = async (userData) => {
  const { firstName, lastName, email, password, role } = userData;

  const existingUser = await db.User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error('Un utilisateur avec cet email existe déjà');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await db.User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    role: role || 'USER',
  });

  const token = signToken({ id: newUser.id, email: newUser.email, role: newUser.role });

  return {
    user: {
      id: newUser.id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
      role: newUser.role,
    },
    token,
  };
};

const loginUser = async (email, password) => {
  const user = await db.User.findOne({ where: { email } });
  if (!user) {
    throw new Error('Identifiants invalides');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Identifiants invalides');
  }

  const token = signToken({ id: user.id, email: user.email, role: user.role });

  return {
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    },
    token,
  };
};

module.exports = {
  registerUser,
  loginUser,
};
