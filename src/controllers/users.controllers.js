const ctrlUser = {};
const User = require('../models/User');


//mostrar usuarios
ctrlUser.rutaGet = async (req, res) => {

    const usuarios = await User.find();
    res.json(usuarios);
};


//agrega el usuario

ctrlUser.rutaPost = async (req, res) => {
    console.log(req.body)

    //cuerpo del body (todos los datos que quiera pasar)
    const {
        ...resto
    } = req.body;
    //const { ...resto } = req.body;   
    //console.log(nombre)
    try {
        const usuario = new User(resto);

        //Guardar usuario en db
        await usuario.save();

        res.json({
            msg: 'Usuario agregado exitosamente',
            usuario
        });
    } catch (error) {
        console.log('Error al guardar los datos del usuario: ', error);
    };
};



//actualizar usuario

ctrlUser.rutaPut = async (req, res) => {

    const {
        id
    } = req.params;
    const {
        _id,
        ...resto
    } = req.body;

    try {

        const usuario = await User.findByIdAndUpdate(id, resto, {
            new: true
        });

        res.json({
            msg: 'Datos del usuario actualizados exitosamente',
            usuario
        });

    } catch (error) {
        console.log('Error al actualizar los datos del usuario: ', error);
    }

};



ctrlUser.rutaDelete = async (req, res) => {

    const {id} = req.params;
    try {

        await User.findByIdAndUpdate(id, { activo: false})
        res.json({
            msg: 'usuario desactivado correctamente'
        })
    } catch (error) {
        console.log('Error al eliminar usuario: ', error)
    }
}

module.exports = ctrlUser;