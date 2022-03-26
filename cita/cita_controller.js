const Citas = require ('./cita_model.js')

module.exports.traerCita = async (req, res) => {
    //GET DE Cita //buscar por el id de la cita
    try{
        const lista = await Citas.findAll({
            where: {
              idUsuario: req.query.idUsuario,
            },
          });
          res.json(lista);
    }
    catch(error){
        res.json(error)
    }
    
  };

module.exports.crearCita = async (req, res) => {
    //POST DE CITA
    try{
        const nuevaCita = {
            tratamiento: req.body.tratamiento,
            fechaDeVisita: req.body.fechaDeVisita,
            idUsuario: req.body.idUsuario,
          };
        
          const citaCreada = await Citas.create(nuevaCita);
          res.status(201).json(citaCreada);
    }
    catch(error){
        res.json(error)
    }
    
  };


