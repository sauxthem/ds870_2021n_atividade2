"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "medicos",
            [
                {
                    id: 1,
                    name: "Felipe Zgoda Borges",
                    email: "felipe.zgoda@hotmail.com",
                    password: "123"
                }
            ]
        )
    }
}