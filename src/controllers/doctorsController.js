const Doctor = require("../models/Doctor")
const Patient = require("../models/Patient")
const Appointment = require("../models/Appointment")

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function passwordValidation(password){
    if (password.length < 8)
        return "Password must have at least 8 characters!";
    else if (!password.match(/[A-Z]/g))
        return "Password must contain at least one upper case letter!";
    else if (!password.match(/[a-z]/g))
        return "Password must contain at least one lower case letter!";
    else if (!password.match(/[0-9]/g))
        return "Password must contain at least one number!";
    else return "OK";
}

function generateToken(id) {
	process.env.JWT_SECRET = Math.random().toString(36).slice(-20);
	const token = jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: 82800,
	});
	return token;
}

async function authenticateDoctor(req, res){
    let {
        email,
        password
    } = req.body;

    if (!email || !password)
        return res.status(400).json({ msg: "You must inform the email and password!"});
    
    try {
        let doctor = await Doctor.findOne({
            where: { email },
        });

        if (!doctor){
            return res.status(404).json({msg: "Doctor not found!"});
        }
        else {
            if (bcrypt.compareSync(password, doctor.password)) {
                const token = generateToken(doctor.id);
                return res.status(200).json({msg: "User successfully authenticated.", token});
             } else 
                return res.status(401).json({ msg: "Invalid user and/or password. "});
        }
    }
    catch (error){ 
        res.status(500).json({ msg: error.message});
    }
}

module.exports = {
    authenticateDoctor,
    async newDoctor(req, res) {
        let {
            name,
            email,
            password
            } = req.body;

        if (name == undefined || email == undefined || password == undefined) {
            res
                .status(400)
                .json({msg: "You must inform a valid name, email and password!"});
            return;
        }

        let pwdValid = passwordValidation(password);

        if (pwdValid !== "OK")
            return res.status(400).json({ msg: pwdValid })

        try {
            let salt = bcrypt.genSaltSync(12);
            let hash = bcrypt.hashSync(password, salt);

            let newDoctor = await Doctor.create({
                name,
                email,
                password: hash,
            });
            console.log("\nCreation successful - " + newDoctor.name + "\n");

            if (newDoctor) {
                res.status(201).json({msg: "New Doctor created successfully."});
            } else {
                res.status(500).json({msg: "It was not possible to create the new doctor."});
            }
        } catch (error) {
            res.status(500).json({msg: "There was an error while creating the Doctor: " + error});
        }
    },

    async listAllDoctors(req, res) {
        const doctors = await Doctor.findAll({
			order: [["id", "ASC"]],
		}).catch((error) => {
			res.status(500).json({ msg: "Connection fail." });
		});
		if (doctors) {
            res.status(200).json({ doctors });
        } else {
            res.status(404).json({ msg: "It was not possible to find the doctors." });   
        }
    },

    async updateDoctor(req, res) {
        const doctorId = req.body.id;
        const doctor = req.body;
        if (!doctorId) res.status(400).json({msg: "You must inform a valid ID!"});
        else {
            const doctorExists = await Doctor.findByPk(doctorId);
            if (!doctorExists)
                res.status(404).json({msg: "The informed id doesn`t exists."});
            else {
                if (doctor.name || doctor.email || doctor.password) {
                    await Doctor.update(doctor, {
                        where: {id: doctorId},
                    });
                    return res
                        .status(200)
                        .json({msg: "Doctor successfully updated!"});
                } else
                    return res
                        .status(400)
                        .json({msg: "You must inform a valid name, email and password!"});
            }
        }
    },

    async deleteDoctor(req, res) {
        const doctorId = req.params.id;
		const deletedDoctor = await Doctor.destroy({
			where: { id: doctorId },
		}).catch(async (error) => {
			let doctorHasPatient = await Patient.findOne({
				where: { doctorId },
			}).catch((error) => {
				res.status(500).json({ msg: "Connection fail." });
			});

            let doctorHasAppointment = await Appointment.findOne({
                where: { doctorId },
            }).catch((error) => {
				res.status(500).json({ msg: "Connection fail." });
			});

			if (doctorHasPatient) {
				return res
					.status(403)
					.json({ msg: "This doctor has patients associates." });
            } else if (doctorHasAppointment) {
                return res
                    .status(403)
                    .json({ msg: "This doctor has appointments associates."})
            }
		});
		if (deletedDoctor != 0)
			res.status(200).json({ msg: "Doctor successfully deleted!" });
		else res.status(404).json({ msg: "Doctor not found." });
    }
}