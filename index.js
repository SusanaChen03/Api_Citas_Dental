const express = require ('express');
const app = express();
const usRouter = require ('./user/routes.js');
const dotenv = require ('dotenv');

dotenv.config();
app.use(express.json());



app.listen(process.env.PORT, () => console.log('servidor levantado'));

app.use ('/usuarios', usRouter);