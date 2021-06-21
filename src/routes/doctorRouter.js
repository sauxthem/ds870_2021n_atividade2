const express = require("express");
const doctorRouter = express.Router();
const doctorController = require("../controllers/doctorsController");
const auth = require("../middlewares/auth");

doctorRouter.get("/", auth, doctorController.listAllDoctors);
doctorRouter.get("/newDoctor", auth, doctorController.newDoctor);
doctorRouter.post("/updateDoctor/:id", auth, doctorController.updateDoctor);
doctorRouter.delete("/:id", auth, doctorController.deleteDoctor);
doctorRouter.post("/authenticate", doctorController.authenticateDoctor);

module.exports = doctorRouter;