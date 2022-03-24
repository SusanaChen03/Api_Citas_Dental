const sequelize = require("sequelize");
const express = require("express");
const router = express.Router();
const controller = require("./usuario_controller.js");

router.get("/", controller.traerUsuario);
router.post("/", controller.crearUsuario);
router.post("/login", controller.login);

module.exports = router;
