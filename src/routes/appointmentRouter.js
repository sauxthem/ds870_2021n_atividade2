const express = require("express");
const appointmentRouter = express.Router();
const appointmentController = require("../controllers/appointmentsController");
const auth = require("../middlewares/auth");

appointmentRouter.get("/", appointmentController.listAppointments);
appointmentRouter.get("/listByPatient/:id", auth, appointmentController.listAppointmentsByPatient);
appointmentRouter.get("/listByDoctor/:id", auth, appointmentController.listAppointmentsByDoctor);
appointmentRouter.post("/newAppointment", auth, appointmentController.newAppointment);
appointmentRouter.delete("/:id", auth, appointmentController.deleteAppointment);

module.exports = appointmentRouter;