const Patient = require("../models/Patient")
const Doctor = require("../models/Doctor")

module.exports = {
    async newPatient(req, res) {
        let {
            name,
            email,
            phone,
            doctorId
        } = req.body;

        if (name == undefined || email == undefined || phone == undefined || doctorId == undefined) {
            res
                .status(400)
                .json({msg: "You must inform a valid name, email, phone and doctorId!"});
            return;
        }
        let doctor = await Doctor.findOne({
            where: {id: doctorId}
        });

        if (!doctor) {
            res.status(400).json({msg: "The informed doctorId is not valid."});
        } else {
            try {
                let newPatient = await Patient.create({
                    name,
                    email,
                    phone,
                    doctorId
                });
                console.log("\nCreation successful - " + newPatient.name + "\n");

                if (newPatient) {
                    res.status(201).json({msg: "New Patient created successfully."});
                } else {
                    res.status(500).json({msg: "It was not possible to create the new Patient."});
                }
            } catch (error) {
                res.status(500).json({msg: "There was an error while creating the Patient: " + error});
            }
        }
    },

    async searchPatientByName(req, res) {
        let patientName = req.params.name;

        if (patientName == undefined) {
            res.status(400).json({msg: "You must inform a valid Name!"});
        } else {
            const patients = await Patient.findAll({
                where: { name: patientName },
                order: [["name", "DESC"]],
            }).catch((error) => {
                res.status(500).json({msg: "There was an error while listing patients: " + error.message});
            });

            if (patients && patients != "") {
                res.status(200).json({patients});
            } else {
                res.status(404).json({msg: "No patients were found."});
            }
        }
    },

    async searchPatientByPhysicianId(req, res) {
        let doctorId = req.params.doctorId;

        if (doctorId == undefined) {
            res.status(400).json({msg: "You must inform a valid ID!"});
        } else {
            const patients = await Patient.findAll({
                where: {doctorId},
                order: [["name", "DESC"]],
            }).catch((error) => {
                res.status(500).json({msg: "There was an error while listing patients: " + error.message});
            });

            if (patients && patients != "") {
                res.status(200).json({patients});
            } else {
                res.status(404).json({msg: "No patients were found."});
            }
        }
    },

    async updatePatient(req, res) {
        const patientId = req.body.id;
        const patient = req.body;
        if (!patientId) res.status(400).json({msg: "You must inform a valid ID!"});
        else {
            const patientExists = await Patient.findByPk(patientId);
            if (!patientExists)
                res.status(404).json({msg: "The informed patientId is not valid."});
            else {
                if (patient.name || patient.email || patient.phone || patient.doctorId) {
                    await Patient.update(patient, {
                        where: {id: patientId},
                    });
                    return res
                        .status(200)
                        .json({msg: "Patient successfully updated!"});
                } else
                    return res
                        .status(400)
                        .json({msg: "You must inform a valid name, email, phone and doctorId!"});
            }
        }
    },
}