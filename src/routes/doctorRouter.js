const express = require("express");
const doctorRouter = express.Router();
const doctorController = require("../controllers/doctorsController");

doctorRouter.get("/", doctorController.listAllDoctors);
doctorRouter.get("/newDoctor", doctorController.newDoctor);
doctorRouter.post("/updateDoctor/:id", doctorController.updateDoctor);
doctorRouter.delete("/:id", doctorController.deleteDoctor);
doctorRouter.post("/authenticate", doctorController.authenticateDoctor);

module.exports = doctorRouter;