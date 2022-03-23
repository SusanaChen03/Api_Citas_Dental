const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const conexion = new Sequelize(
  "clinicaDental",
  "root",
  process.env.MYSQL_PASS,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const arranque = async () => {
  try {
    await conexion.authenticate();
    console.log("Conexión sequelize conectada 👌");
  } catch (error) {
    console.error("No se puede conectar a la base de datos:", error);
  }
};

arranque();

module.exports = conexion;
