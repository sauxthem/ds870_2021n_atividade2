'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("medicos", {
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
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        length: 255,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("medicos");
  }
};
