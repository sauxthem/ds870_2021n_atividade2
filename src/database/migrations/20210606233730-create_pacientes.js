'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("pacientes", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        length: 255,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        length: 255,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        length: 255,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("pacientes");
  }
};
