"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "patients",
            [
                {
                    id: 1,
                    name: "Joao Pedro Da Silva",
                    email: "joaodasilva@hotmail.com",
                    phone: "(41)99198787"
                },
                {
                    id: 2,
                    name: "Francine Scher Kila",
                    email: "fransinha@msn.com",
                    phone: "(41)87654342"
                },
                {
                    id: 3,
                    name: "Maria Joaquina Cane",
                    email: "joaquininharia@gmail.com",
                    phone: "(41)43438787"
                },
            ],
        {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("patients", null, {});
    },
};