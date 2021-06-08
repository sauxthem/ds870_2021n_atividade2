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
                {
                    id: 4,
                    name: "Fernando Henrique Cardoso",
                    email: "fhcardoso@gmail.com",
                    phone: "(41)12568753"
                },
                {
                    id: 5,
                    name: "Thamires Da Cunha",
                    email: "thamiscunha@msn.com",
                    phone: "(41)98987677"
                },
                {
                    id: 6,
                    name: "Matheus Fagundes",
                    email: "fagundesmath@hotmail.com",
                    phone: "(41)89998888"
                },
            ],
        {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("patients", null, {});
    },
};