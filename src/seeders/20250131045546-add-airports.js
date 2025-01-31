'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Kempegowda Airport',
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mysuru Airport',
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mangaluru International Airport",  
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Indira Gandhi International Airport",
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Airports', null, {});
  }
};
