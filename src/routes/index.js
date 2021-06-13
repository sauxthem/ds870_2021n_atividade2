const express = require("express");
const router = express.Router();

const appointmentRouter = require("./appointmentRouter");
const patientRouter = require("./patientRouter");

router.get("/", (req, res) => {
    res.status(200).json({message: "Server is running."})
});

router.use("/appointment", appointmentRouter);
router.use("/patient", patientRouter);

module.exports = router;