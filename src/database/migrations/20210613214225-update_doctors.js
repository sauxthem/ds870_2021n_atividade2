'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Doctors",
        "createdAt", {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        });
    await queryInterface.addColumn("Doctors",
        "updatedAt", {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal(
              "CURRENT_TIMESTAMP"
          )
        });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Patients", "createdAt");
    await queryInterface.removeColumn("Patients", "updatedAt")
  }
};
