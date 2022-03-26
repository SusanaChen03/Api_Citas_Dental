const sequelize = require("sequelize");
const express = require("express");
const router = express.Router();
const controller = require("./usuario_controller.js");



router.get("/admin", controller.autorizacion, controller.crearAdmin);
router.get("/", controller.traerUsuario);
router.post("/", controller.crearUsuario);
router.post("/login", controller.login);
router.post("/logout",controller.logout);
router.patch("/:id", controller.editarUsuario);
router.delete("/",controller.borrarUsuario);

module.exports = router;
