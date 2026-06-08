'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('Djomatech777', 10);
    
    await queryInterface.bulkInsert('users', [
      {
        firstName: 'Admin',
        lastName: 'Djoma',
        email: 'admin@djomatech.com',
        password: hashedPassword,
        role: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Billy',
        lastName: 'Keita',
        email: 'billy@djomatech.com',
        password: hashedPassword,
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
