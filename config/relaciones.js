const Usuarios = require("../usuario/usuario_model.js");
const Pacientes = require("../paciente/paciente_model.js");
const Citas = require("../cita/cita_model.js");

Pacientes.hasOne(Usuarios, { foreignKey: "idUsuario" });
Usuarios.hasOne(Pacientes, { foreignKey: "id" });

Pacientes.hasOne(Citas, { foreignKey: "id" });
Citas.hasMany(Pacientes, { foreignKey: "idPaciente" });

module.exports = { Usuarios: Usuarios, Pacientes: Pacientes, Citas: Citas };
