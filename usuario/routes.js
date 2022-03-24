const sequelize = require ('sequelize');
const express = require('express');
const router = express.Router();
const controller = require('./controller.js');

router.get('/',controller.traerUsuarios);
router.post('/',controller.crearUsuario);


module.exports = router;