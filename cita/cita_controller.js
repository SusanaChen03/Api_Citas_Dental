const Citas = require ('./cita_model.js')

module.exports.traerCita = async (req, res) => {
    //GET DE Cita //buscar por el id de la cita
    const lista = await Citas.findAll({
      where: {
        idUsuario: req.query.idUsuario,
      },
    });
    res.json(lista);
  };

module.exports.crearCita = async (req, res) => {
    //POST DE CITA
    const nuevaCita = {
      tratamiento: req.body.tratamiento,
      fechaDeVisita: req.body.fechaDeVisita,
      idUsuario: req.body.idUsuario,
    };
  
    const citaCreada = await Citas.create(nuevaCita);
    res.status(201).json(citaCreada);
  };


