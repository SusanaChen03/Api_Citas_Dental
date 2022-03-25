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
    console.log(
      req.body.email,
      req.body.contraseña + " Este es el cuerpo de la peticion"
    );
    const buscarUsuario = await Usuario.findOne({
      where: { email: req.body.email, contraseña: req.body.contraseña },
    });

    console.log(buscarUsuario + " usuario encontrado");
    if (buscarUsuario != null) {
      console.log("ficha starting");

      const ficha = jwt.sign(
        { rol: buscarUsuario.rol, id: buscarUsuario.id },
        process.env.JWT_KEY
      );

      console.log("ficha", ficha);

      res.json(ficha);
    } else {
      res.status(401).send("Usuario no encontrado");
    }
  } catch (error) {
    res.json(error);
  }
};
