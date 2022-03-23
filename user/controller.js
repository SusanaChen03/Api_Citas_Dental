const usuarios = require ('./model.js');





module.exports.traerUsuarios = async (req, res) => {
    const lista = await usuarios.findAll({
        where:{
            nombre: req.query.nombre,
        }
    });
    res.json(lista);
};



module.exports.crearUsuario = async (req,res)=>{

    const nuevoUsuario ={nombre:req.body.nombre,email:req.body.email, contraseña:req.body.contraseña,rol:req.body.rol} 

        const usuarioCreado = await user.create(nuevoUsuario);
        res.status(201).json(usuarioCreado);
};
