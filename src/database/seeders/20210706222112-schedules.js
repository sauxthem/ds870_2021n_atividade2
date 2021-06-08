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
                {
                    id: 4,
                    doctorId: 1,
                    patientId: 4,
                    appointmentDate: "2021-07-10",
                    description: "O paciente possui sequelas de AVC"
                },
                {
                    id: 5,
                    doctorId: 2,
                    patientId: 5,
                    appointmentDate: "2021-04-22",
                    description: "A paciente se queixa de cólicas que náo param"
                },
                {
                    id: 6,
                    doctorId: 3,
                    patientId: 6,
                    appointmentDate: "2021-07-03",
                    description: "O paciente se queixa de falta de sono"
                },
            ],
        {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("schedules", null, {});
    },
};