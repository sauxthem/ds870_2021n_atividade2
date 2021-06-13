const Sequelize = require("sequelize");

class Doctor extends Sequelize.Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }

    static associate(models){
        this.hasMany(models.Appointment, { foreignKey: "doctorId"});
        this.hasMany(models.Patient, { foreignKey: "doctorId"});
    }
}

module.exports = Doctor;
