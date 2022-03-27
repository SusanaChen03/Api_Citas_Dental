
const Citas = require ('./cita_model.js')
const Paciente = require ("../paciente/paciente_model.js");

const { Sequelize, DataTypes } = require("sequelize");




module.exports.listaCita = async (req, res) => {    
  
    try {
      const lista = await Citas.findAll({
        include: [{ model: Paciente }],
        where: {
          idPaciente: req.query.IdPaciente
        }
      });
      res.json(lista);
    } catch (error){
      res.json(error + "error")
    };
  };



module.exports.filtrarCita = async (req, res) => {
    //GET DE Cita //buscar por el id de la cita
    try{
        console.log("traer cita")
        const lista = await Citas.findAll({
            where: {
                [Sequelize.Op.and]:{
                    idPaciente: req.query.idPaciente,
                    fechaDeVisita: {[Sequelize.Op.gte]: new Date()}
                }
            }
          });
          res.json(lista);
    }
    catch(error){
        console.log(error + "error")
        res.json(error)
    }
    
  };

module.exports.crearCita = async (req, res) => {
    //POST DE CITA
    console.log(req.body)
    try{
        const nuevaCita = {
            tratamiento: req.body.tratamiento,
            fechaDeVisita: req.body.fechaDeVisita,
            idPaciente: req.body.idPaciente
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
