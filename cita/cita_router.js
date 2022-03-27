const sequelize = require("sequelize");
const express = require("express");
const router = express.Router();
const controller = require("./cita_controller.js");

router.get("/lista",controller.listaCita);
router.get("/", controller.filtrarCita);
router.post("/", controller.crearCita);
router.delete("/", controller.borrarCita);
router.patch("/:id", controller.modificarCita);
module.exports=router