const routerLogin = require('express').Router();

/* const {
    validarCampos
} = require('../helpers/validarCampos'); */

const {
    rutaLogin,
    rutaGet,
    revalidarToken
} = require('../controllers/auth.controllers')

const {
    validar_jwt
} = require('../middlewares/validarJWT')

const {
    validarCampos
} = require('../helpers/validarCampos');



const {
    body,
    check
} = require('express-validator');



//RUTA LOGIN

//mostrar los usuarios logueados 
routerLogin.get('/get-auth', rutaGet)

//ruta TOKEN

routerLogin.get('/get-userID', [validar_jwt], revalidarToken)

//loguearse
routerLogin.post('/auth/login',

    body('email', 'El email ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),

    validarCampos,

    rutaLogin)


module.exports = routerLogin;