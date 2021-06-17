"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "Doctors",
            [
                {
                    id: 1,
                    name: "Felipe Zgoda Borges",
                    email: "felipe.zgoda@hotmail.com",
                    password: "$2a$12$dCcFwvOAIgRln9WgvkZxXeeHO5gbGXtBIvs7.QSPZVOVymVALU5Zi"
                },
                {
                    id: 2,
                    name: "Michelly Narita Kuriyanma",
                    email: "michellykuriyama@hotmail.com",
                    password: "$2a$12$dCcFwvOAIgRln9WgvkZxXeeHO5gbGXtBIvs7.QSPZVOVymVALU5Zi"
                },
                {
                    id: 3,
                    name: "Maria Fernanda de Souza",
                    email: "mahzinhasouza@gmail.com",
                    password: "$2a$12$dCcFwvOAIgRln9WgvkZxXeeHO5gbGXtBIvs7.QSPZVOVymVALU5Zi"
                },
            ],
        {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Doctors", null, {});
    },
};