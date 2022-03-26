const res = require("express/lib/response");
const Paciente = require("./paciente_model.js");

module.exports.infoPaciente = async (req, res) => {
  //GET del Paciente
  try {
    const lista = await Paciente.findAll({
      where: {
        idUsuario: req.query.idUsuario,
      },
    });
    res.json(lista);
  } catch (error) {
    res.json(error);
  }
};

module.exports.crearPaciente = async (req, res) => {
  try {
    const nuevoPaciente = {
      direccion: req.body.direccion,
      disponibilidad: req.body.disponibilidad,
      idUsuario: req.body.idUsuario,
      alergias: req.body.alergias,
    };

    const pacienteCreado = await Paciente.create(nuevoPaciente);
    res.status(201).json(pacienteCreado);
  } catch (error) {
    res.json(error);
  }
};

module.exports.modificarPaciente = async (req, res) => {
  try {
    await Paciente.updateOne({ id: req.params.id }, req.body);
  } catch (error) {
    res.json(error);
  }
};

module.exports.bajaPaciente = async (req, res) => {
  try {
    res.json(await Paciente.deleteOne({ id: req.params.id }));
  } catch (error) {
    res.json(error);
  }
};
