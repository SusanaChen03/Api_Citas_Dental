const { Sequelize, DataTypes } = require("sequelize");
const conexion = require("../config/db_sequelize.js");

const Paciente = conexion.define("Pacientes", {
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  disponibilidad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idUsuario: {
    type: DataTypes.INTEGER,
  },
  alergias: {
    type: DataTypes.STRING,
  },
});

console.log(Paciente === conexion.models.Paciente); // true

try {
  Paciente.sync();
} catch (e) {
  console.log(e + " Este es el error");
}

module.exports = Paciente;
