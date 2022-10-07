const express = require('express');
const cors = require('cors')
const morgan = require("morgan");
//inicializaciones
const app = express();

//enlace a las rutas
//const usersRoutes = require('./routes/api/users')

app.use(cors())
require('dotenv').config();
require('./config/db');


app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


app.use(morgan("dev"));

//conexion al server
app.set("port", process.env.PORT || 3000);



//rutas 

app.use(require('./routes/users.routes'));
app.use(require('./routes/auth.routes'));
app.use(require('./routes/materias.routes'));
app.use(require('./routes/publicaciones.routes'));




//devuelve la conexion
app.listen(app.get("port"), () =>
    console.log(`server on port ${app.get("port")}`)
);