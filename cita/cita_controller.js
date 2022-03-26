const req = require('express/lib/request');
const res = require('express/lib/response');
const Citas = require ('./cita_model.js')

module.exports.traerCita = async (req, res) => {
    //GET DE Cita //buscar por el id de la cita
    try{
        const lista = await Citas.findAll({
            where: {
              idPaciente: req.query.idPaciente,
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

  module.exports.borrarCita = async (req,res) =>{
      //Delete borrar cita por el id
      try{
          await Citas.destroy({where:{id:req.body.id}});
          res.json("Cita borrada");   
      }catch (error){
          res.json(error);
      }
  }

  module.exports.modificarCita = async (req,res) =>{
      try{
          await Citas.update(req.body, {where:{id: req.params.id}});
          res.json("Cita modificada");
      } catch (error){
          res.json(error);
      }
};
