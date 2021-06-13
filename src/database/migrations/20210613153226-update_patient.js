'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Patients",
        "doctorId", {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Doctors',
                key: 'id'
            }
        });
    await queryInterface.addColumn("Patients",
        "createdAt", {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        });
    await queryInterface.addColumn("Patients",
        "updatedAt", {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal(
                "CURRENT_TIMESTAMP"
            )
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Patients", "doctorId");
      await queryInterface.removeColumn("Patients", "createdAt");
      await queryInterface.removeColumn("Patients", "updatedAt");
  }
};
