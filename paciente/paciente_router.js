const sequelize = require("sequelize");
const express = require("express");
const router = express.Router();
const controller = require("./paciente_controller.js");

router.get("/", controller.infoPaciente);
router.post("/", controller.crearPaciente);
router.patch("/:id", controller.modificarPaciente);
router.delete("/", controller.bajaPaciente);

module.exports = router;
