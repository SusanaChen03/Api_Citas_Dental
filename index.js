const express = require("express");
const app = express();
const usRouter = require("./usuario/usuario_routes.js");
const dotenv = require("dotenv");
const paRouter = require("./paciente/paciente_router.js");

dotenv.config();
app.use(express.json());

app.listen(process.env.PORT, () => console.log("servidor levantado"));

app.use("/usuarios", usRouter);
app.use("/pacientes", paRouter);
