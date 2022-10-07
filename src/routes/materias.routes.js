const routerMateria = require('express').Router()

const {
    rutaPostMateria,
    rutaGetMateria,
    rutaPutMateria,

} = require('../controllers/materias.controllers');

//RUTA GET

routerMateria.get('/get-materia', rutaGetMateria)

//RUTA POST

routerMateria.post('/materia', rutaPostMateria)

//RUTA PUT

routerMateria.put('/edit.materia/:id', rutaPutMateria)


module.exports = routerMateria