const ctrlAuthUser = {};
const User = require('../models/User')

const {
    generate_jwt
} = require('../helpers/generar_jwt');

//Login de usuarios

ctrlAuthUser.rutaGet = async (req, res) => {

    const usuarioAuth = await User.find();
    res.json(usuarioAuth);
};


ctrlAuthUser.rutaLogin = async (req, res) => {

    const {
        email,
        contrasenia
    } = req.body;


    // Busqueda del usuario segun las credenciales recibidas
    const usuarioAuth = await User.findOne({
        email,
        contrasenia
    });


    if (!usuarioAuth) {
        return res.status(401).json({
            ok:true,
            msg: 'el usuario no existe'
        })
    }

    //Generacion del token
    const token = await generate_jwt(usuarioAuth.id);

    //Muestra el token generado
    res.json({
        token,
        usuarioAuth
    });


}

ctrlAuthUser.revalidarToken = async (req, res) => {

    const {
        _id
    } = req.usuario;

    //const query = {userId: _id}

    const usuario = await User.findById(_id)



    const token = await generate_jwt(_id);


    
    res.json({
        ok: true,
        msg: 'Token revalidado',
        usuario,
        token

    })
}


module.exports = ctrlAuthUser;