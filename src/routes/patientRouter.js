const express = require("express");
const patientRouter = express.Router();
const patientController = require("../controllers/patientsController");

patientRouter.post("/newPatient", patientController.newPatient);
patientRouter.get("/searchPatientByName/:name", patientController.searchPatientByName);
patientRouter.get("/searchPatientByPhysicianId/:doctorId", patientController.searchPatientByPhysicianId);
patientRouter.put("/updatePatient", patientController.updatePatient);

module.exports = patientRouter;