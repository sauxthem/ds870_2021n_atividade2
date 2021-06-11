const express = require("express");
const appointmentRouter = express.Router();
const appointmentController = require("../controllers/appointmentsController");

appointmentRouter.get("/", appointmentController.listAppointments);
appointmentRouter.get("/listByPatient/:id", appointmentController.listAppointmentsByPatient);
appointmentRouter.get("/listByDoctor/:id", appointmentController.listAppointmentsByDoctor);
appointmentRouter.post("/newAppointment", appointmentController.newAppointment);
appointmentRouter.delete("/:id", appointmentController.deleteAppointment);

module.exports = appointmentRouter;