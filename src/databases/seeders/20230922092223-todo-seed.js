'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Todos', [
      {
        title: 'Mobile Legend',
        isDone: false,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        title: 'Maraton Bleach',
        isDone: true,
        createdAt: new Date,
        updatedAt: new Date
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Todos', null, {});
  }
};
