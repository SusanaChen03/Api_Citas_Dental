const Usuarios = require("../usuario/usuario_model.js");
const Pacientes = require("../paciente/paciente_model.js");
const Citas = require("../cita/cita_model.js");


//Usuarios.hasOne(Pacientes, { foreignKey: "idUsuario"});
//Pacientes.hasOne(Usuarios, { foreignKey: "idUsuario" });
//Usuarios.hasOne(Pacientes);
Pacientes.belongsTo(Usuarios, {foreignKey: "idUsuario"});

Pacientes.hasMany(Citas, { foreignKey: "idPaciente" });
Citas.belongsTo(Pacientes, { foreignKey: "idPaciente" });
//Citas.belongsTo(Pacientes);

//module.exports.Usuarios = Usuarios;
//module.exports.Pacientes = Pacientes;
//module.exports.Citas = Citas;

module.exports.Relaciones = {Usuarios, Pacientes, Citas};