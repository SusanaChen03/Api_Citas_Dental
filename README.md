![enter image description here](https://img.freepik.com/vector-gratis/plantilla-diseno-logotipo-clinica-dental-simple_332233-310.jpg?size=626&ext=jpg)

🦷🪥 ***App de Citas - Clínica Dental*** 🪥🦷
-

**Proyecto #5 del bootcamp fullstack developer Geekshubs 2022.**

  Esta app de cita consiste en una api que consta de 3 entidades (Usuario, Paciente y Cita) en la cual hicimos un CRUD de cada uno de ellos con sus respectivo modelos y las claves que los definen. 
En este Proyecto trabajamos con una base de datos relacional (MYSQL) lo cual se generan tablas de cada una de las entidades y se relacionan según la petición con la foreing key, también usamos jswebtoken para hacer la verificación y autentificación en algunos endpoint de la app.


⚙️Descripción de las entidades:
👨‍💻Usuario:
- 
- **Get:**  "/usuarios" para buscar un usuario por el nombre, si ese usuario no existe te devuelve toda la lista de usuarios.
- **Post**: Tenemos tres endpoint con el el método post (/admin : para la autorización y crear usuario , /login y  /logout : nombre y contraseña.)
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

🙋Paciente:
-
- **Get:**  
- **Post:** 
- **Patch:**

- **Delete:**

👀**Modelo paciente**

    direccion: {   
    type:STRING         
    }, 
    disponibilidad: {
    type: INTEGER
    }, 
    idUsuarios: {
    type:STRING
    }, 
    alergia:{
    type:STRING
    }, 

🗒️Cita:
-
- **Get**:  
- **Post:** 
- **Patch:**

- **Delete:**

👀**Modelo  cita**

    tratamiento: {   
    type:STRING         
    }, 
    fechaDeVisita: {
    type: DATE
    }, 
    idPaciente: {
    type: INTEGER
    }, 

📊 Graficas de relaciones de la foreing key
-








🎯Instalación  y herramientas necesarias. 
-
**🛠️Clonar este proyecto desde :** 
git clone  https://github.com/SusanaChen03/Api_citas.git

Cree un archivo de entorno local (.env) si desea modificar algún parámetro e instales todas las dependecias necesarias con npm install.

**🔥Herramientas usadas y necesarias.**
-

 <code><img height="50" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"></code>  <code><img height="50" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code>  <code><img height="50" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code> <code><img height="50" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"></code> <code><img height="50" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"></code>

✅Autores 
-
Susana Chen https://github.com/SusanaChen03
David Sanchéz https://github.com/dvdsanar
Rogelio Toro https://github.com/Rogeliotoro

