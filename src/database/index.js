const sequelize = require("sequelize");
const dbConfig = require("./config/dbconfig");

const Appointment = require("../models/Appointment");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

const conn = new Sequelize(dbConfig)

Appointment.init(conn);
Doctor.init(conn);
Patient.init(conn);

Appointment.associate(conn.models);
Doctor.associate(conn.models);
Patient.associate(conn.models);

modeule.exports = conn;