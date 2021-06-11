const Appointment = require("../models/Appointment")
const Patient = require("../models/Patient")
const Doctor = require("../models/Doctor")

const moment = require("moment")

async function listAppointments(req, res) {
    const appointments = await Appointment.findAll({
        order: [["appointmentDate", "DESC"]],
    }).catch((error) => {
        res.status(500).json({msg: "There was an error while listing appointments: " + error.message});
    });

    if(appointments) {
        res.status(200).json({appointments});
    }
    else {
        res.status(404).json({msg: "No appointments were found."});   
    }
}

async function listAppointmentsByPatient(req, res) {
    let patientId = req.params.id;
    
    if (isNaN(patientId)){
        res.status(400).json({msg: "You must inform a valid ID!"});
    }
    else {
        const appointments = await Appointment.findAll({
            where: { patientId },
            order: [["appointmentDate", "DESC"]],
        }).catch((error) => {
            res.status(500).json({msg: "There was an error while listing appointments: " + error.message});
        });
    
        if (appointments && appointments != ""){
            res.status(200).json({ appointments });
        }
        else {
            res.status(404).json({msg: "No appointments were found."});   
        }
    }
}

async function listAppointmentsByDoctor(req, res) {
    let doctorId = req.params.id;

    if (isNaN(doctorId)){
        res.status(400).json({msg: "You must inform a valid ID!"});
    }
    else {
        const appointments = await Appointment.findAll({
            where: { doctorId },
            order: [["appointmentDate", "DESC"]],
        }).catch((error) => {
            res.status(500).json({msg: "There was an error while listing appointments: " + error.message});
        });

        if (appointments  && appointments != ""){
            res.status(200).json({appointments});
        }
        else {
            res.status(404).json({msg: "No appointments were found."});
        }
    }
}

async function newAppointment(req, res) {
    let {
        doctorId,
        patientId,
        appointmentDate,
        description
    } = req.body;

    if (!doctorId || isNaN(doctorId) || !patientId || isNaN(patientId) || !appointmentDate || 
        !moment(appointmentDate, "YYYY/MM/DD HH:mm:ss", true).isValid() || !description){
            res
                .status(400)
                .json({ msg: "You must inform a valid doctorId, patientId, appointmentDate (format \"YYYY/MM/DD HH:mm:ss\") and description!"});
    }
    else {
        let patient = await Patient.findOne({
            where: { id: patientId }
        });

        if (!patient){
            res.status(400).json({msg: "The informed patientId is not valid."});
        }
        else {
            let doctor = await Doctor.findOne({
                where: { id: doctorId }
            });

            if (!doctor){
                res.status(400).json({ msg: "The informed doctorId is not valid."});
            }
            else {
                try {
                    let newAppointment = await Appointment.create({
                        doctorId,
                        patientId,
                        appointmentDate,
                        description,
                    });
                    console.log("\nCreation successful - " + newAppointment.description + "\n");
                }
                catch (error){
                    res.status(500).json({ msg: "There was an error while creating the Appointment: " + error});
                }

                if (newAppointment){
                    res.status(201).json({ msg: "New appointment created successfully." });
                }
                else {
                    res.status(500).json({ msg: "It was not possible to create the new Appointment."});
                }
            }
        }
    }
}

async function deleteAppointment(req, res){
    let id = req.params.id;

    if (isNaN(id)){
        res.status(400).json({msg: "You must inform a valid Appointment ID!"});
    }
    else {
        let deletedRows = await Appointment.destroy({
            where: { id },
        });
        if (deletedRows != 0){
            res.status(200).json({ msg: "The appointment was successfully deleted." });
        }
        else{ 
            res.status(404).json({ msg: "Appointment not found!"});
        }
    }
}

module.exports = {
    listAppointments,
    listAppointmentsByPatient,
    listAppointmentsByDoctor,
    newAppointment,
    deleteAppointment,
};