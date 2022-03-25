const Usuario = require("./usuario_model.js");
const jwt = require("jsonwebtoken");



module.exports.traerUsuario = async (req, res) => {
  //GET DE Usuario //buscar por nombre del usuario
  const lista = await Usuario.findAll({
    where: {
      nombre: req.query.nombre,
    },
  });
  res.json(lista);
};



module.exports.crearUsuario = async (req, res) => {
  //POST DE Usuario
  const nuevoUsuario = {
    nombre: req.body.nombre,
    email: req.body.email,
    contraseña: req.body.contraseña,
    rol: req.body.rol,
  };

  const usuarioCreado = await Usuario.create(nuevoUsuario);
  res.status(201).json(usuarioCreado);
};




module.exports.login = async (req, res) => {
  try {
    const buscarUsuario = await Usuario.findOne({
      where: { email: req.body.email, contraseña: req.body.contraseña },
    });

    if (buscarUsuario != null) {

      const ficha = jwt.sign(
        { rol: buscarUsuario.rol, id: buscarUsuario.id },
        process.env.JWT_KEY
      );

      res.json(ficha);
    } else {
      res.status(401).send("Usuario no encontrado");
    }
  } catch (error) {
    res.json(error);
  }
};



module.exports.logout = async (req,res)=> {
  try {
    const buscarUsuario = await Usuario.findOne({
      where: {email: req.body.email, contraseña: req.body.contraseña},
    });

    if(buscarUsuario != null){
      console.log("Se a cerrado la sesion"),
      res.json("Se a cerrado la sesion")
    } else {
      res.status(401).send("Usuario incorrecto");
    }
  } catch (error) {
    res.json(error + "error");
  };
};


// patch  no conseguido
module.exports.editarUsuario = async(req,res)=>{

    await Usuario.update({
      id:req.body.did,
    },{   
      where: {
        }
    });
    res.json("Usuario editado");

};


module.exports.borrarUsuario = async (req,res)=>{

  await Usuario.destroy({
    where: {
      nombre:req.body.nombre
    }
  });
  res.json("Usuario Borrado")
};



module.exports.autorizacion = async (req,res)=> {

    try{
      const verificacion = jwt.verify(req.headers.token, process.env.JWT_SECRET);
  if(verificacion == 'client' || verificacion =='admin'){
      next();
  }else{
          console.log('error else'+ verificacion);
  res.json (403);
  }
  }catch(e){
      console.log("el error es" + e)
  res.json (401);
  }
}