const routerPublicacion = require('express').Router()

const {
    rutaPostPublicacion,
    rutaGetPublicacion,
    rutaPutPublicacion,
    rutaDeletePublicacion
} = require('../controllers/publicacion.controllers');



//RUTA GET

routerPublicacion.get('/get-publicacion', rutaGetPublicacion)


//RUTA POST

routerPublicacion.post('/publicacion' , rutaPostPublicacion)

//RUTA PUT

routerPublicacion.put('/edit-publicacion/:id', rutaPutPublicacion)

//RUTA DELETE

routerPublicacion.delete('/delete-publicacion/:id', rutaDeletePublicacion)


module.exports=routerPublicacion