"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            "schedules",
            [
                {
                    id: 1,
                    doctorId: 1,
                    patientId: 1,
                    appointmentDate: "2021-05-06",
                    description: "O paciente está suando muito e com febre"
                },
                {
                    id: 2,
                    doctorId: 2,
                    patientId: 2,
                    appointmentDate: "2021-06-07",
                    description: "A paciente possui coriza e falta de paladar"
                },
                {
                    id: 3,
                    doctorId: 3,
                    patientId: 3,
                    appointmentDate: "2021-07-08",
                    description: "A paciente se queixa de dores de cabeca frequentes"
                },
            ],
        {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("schedules", null, {});
    },
};