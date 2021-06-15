const express = require("express");
const doctorRouter = express.Router();
const doctorController = require("../controllers/doctorsController");

doctorRouter.get("/", doctorController.listAllDoctors);
doctorRouter.get("/newDoctor", doctorsController.newDoctor);
doctorRouter.post("/updateDoctor/:id", doctorController.updateDoctor);
doctorRouter.delete("/:id", doctorController.deleteDoctor);

module.exports = doctorRouter;