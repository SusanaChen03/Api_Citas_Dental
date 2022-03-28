![enter image description here](https://img.freepik.com/vector-gratis/plantilla-diseno-logotipo-clinica-dental-simple_332233-310.jpg?size=626&ext=jpg)

## 🦷🪥 **_App de Citas - Clínica Dental_** 🪥🦷

**Proyecto #5 del bootcamp fullstack developer Geekshubs 2022.**

Esta app de cita consiste en una api que consta de 3 entidades (Usuario, Paciente y Cita) en la cual hicimos un CRUD de cada uno de ellos con sus respectivo modelos y las claves que los definen.
En este Proyecto trabajamos con una base de datos relacional (MYSQL) lo cual se generan tablas de cada una de las entidades y se relacionan según la petición con la foreing key, también usamos jswebtoken para hacer la verificación y autentificación en algunos endpoint de la app.

⚙️Descripción de las entidades:
👨‍💻Usuario:

-
- **Get:** "/usuarios" para buscar un usuario por el nombre, si ese usuario no existe te devuelve toda la lista de usuarios.
- **Post**: Tenemos tres endpoint con el el método post (/admin : para la autorización y crear usuario , /login y /logout : nombre y contraseña.)
- **Patch:** Para buscar datos de un usuario por la query params y modificándolo por el body.
- **Delete:** Para borrar un usuario a través de su Id.

👀**Modelo usuario**

    nombre: {
    type:STRING
    },
    email: {
    type: STRING
    },
    rol: {
    type:STRING
    },
    contraseña:{
    type:STRING
    },

## 🙋Paciente:

- **Get:** para buscar un paciente por el idUsuario, o hacer una petición - Get al body con el endpoint /paciente.
- **Post:** Para crear un nuevo paciente se debe poner la dirección, disponibilidad, id usuario y alergia, luego se hace una petición post al body con los valores introducido.
- **Patch:** Para buscar datos de un paciente por la query params y modificándolo por el body.

- **Delete:** Para borrar un paciente a través de su Id.

👀**Modelo paciente**

    direccion: {
    type:STRING
    },
    disponibilidad: {
    type: STRING
    },
    idUsuarios: {
    type:INTEGER
    },
    alergia:{
    type:STRING
    },

## 🗒️Cita:

- **Get**: para buscar una cita por el idPaciente, a partir de la fecha de la petición.
- **Post:** Para crear un nueva cita se debe poner el tratamiento, fechaDeVisita, y el idPaciente luego se hace una petición post al body con los valores introducido.
- **Patch:** Para buscar datos de una cita por la query params y modificándolo por el body.
- **Delete:** Para borrar una cita a través de su Id.

👀**Modelo cita**

    tratamiento: {
    type:STRING
    },
    fechaDeVisita: {
    type: DATE
    },
    idPaciente: {
    type: INTEGER
    },

## 📊 Relaciones/foreing key.

    Pacientes.belongsTo(Usuarios, {foreignKey:  "idUsuario"});
    Pacientes.hasMany(Citas, { foreignKey:  "idPaciente" });
    Citas.belongsTo(Pacientes, { foreignKey:  "idPaciente" });

## 🔐Middlewares.

Usando jswebtoken creamos una función de verificación lo cual nos generan un token y este se usa en algunos endpoint de la app, como por ejemplo: un Admin solo puede generar nuevos usuarios y lo hace precisamente con este token.

## 🚀Despliegue en Heroku.

Link :

## 🎯Instalación y herramientas necesarias.

**🛠️Clonar este proyecto desde :**
`git clone` https://github.com/SusanaChen03/Api_citas.git

Cree un archivo de entorno local (`.env`) para modificar las variables de entornos e instales todas las herramientas necesarias con `npm install`.

## **🔥Herramientas usadas y necesarias.**

<code><img height="50" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"></code> <code><img height="50" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code> <code><img height="50" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code> <code><img height="50" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"></code> <code><img height="50" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"></code>

## ✅Autores

Susana Chen https://github.com/SusanaChen03
David Sánchez https://github.com/dvdsanar
Rogelio Toro https://github.com/Rogeliotoro
