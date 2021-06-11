const express = require("express");
const router = express.Router();

const appointmentRouter = require("./appointmentRouter");

router.get("/", (req, res) => {
    res.status(200).json({message: "Server is running."})
});

router.use("/appointment", appointmentRouter);

module.exports = router;