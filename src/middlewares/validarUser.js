const { body, check } = require('express-validator');

const validarUser=
[
    body('nombre', 'El nombre ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),

    body('apellido', 'El apellido ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),

    body('contrasenia', 'La contraseña ingresada no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),
    
    body('domicilio', 'El domicilio ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),

    body('localidad', 'La localidad ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty(),

    body('dni', 'El dni ingresado no contiene un formato correcto')
    .isNumeric()
    .isLength({ max: 8 })
    .not()
    .isEmpty(),
    
    body('telefono', 'El telefono ingresado no contiene un formato correcto')
    .isNumeric()
    .isLength({ max: 10 })
    .not()
    .isEmpty(),

    
    body('email', 'El email ingresado no contiene un formato correcto')
    .isString()
    .not()
    .isEmpty()
    .isEmail(),

    body('userType', 'El tipo ingresado no contiene un formato correcto')

    .isIn(["Alumno", "Profesor", "Admin"]),
    
   
    body('tituloSecundario', 'no puede acceder, fijese si escribio bien o si eres alumno')
    .optional()
    .isString()
    .not()
    .isEmpty(),
   
    
    body('titulos', 'El titulo  ingresado no contiene un formato correcto')
    .optional()
    .isString()
    .not()
    .isEmpty()
   
]



module.exports = {
    validarUser
}






