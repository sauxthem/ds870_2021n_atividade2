"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "doctors",
            [
                {
                    id: 1,
                    name: "Felipe Zgoda Borges",
                    email: "felipe.zgoda@hotmail.com",
                    password: "123"
                },
                {
                    id: 2,
                    name: "Michelly Narita Kuriyanma",
                    email: "michellykuriyama@hotmail.com",
                    password: "123"
                },
                {
                    id: 3,
                    name: "Maria Fernanda de Souza",
                    email: "mahzinhasouza@gmail.com",
                    password: "123"
                },
            ],
        {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("doctors", null, {});
    },
};