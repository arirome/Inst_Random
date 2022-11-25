const ctrlPublicacion = {};
const { query } = require('express');
const Publicacion = require('../models/Publicaciones');


//mostrar publicacioness
ctrlPublicacion.rutaGetPublicacion = async (req, res) => {

    const publicaciones = await Publicacion.find().populate('user', "nombre")
    //res.send(publicaciones)
    
    res.json(publicaciones);
};


//agrega el publicaciones

ctrlPublicacion.rutaPostPublicacion = async (req, res) => {

    console.log(req.body)
    const {
        ...resto
    } = req.body;

    try {
        const publicaciones = new Publicacion(resto);

        //Guardar publicaciones en db
        await publicaciones.save();

        res.json({
            msg: 'publicaciones agregado exitosamente',
            publicaciones
        });
    } catch (error) {
        console.log('Error al guardar los datos del publicaciones: ', error);
    };
};



//actualizar publicaciones

ctrlPublicacion.rutaPutPublicacion = async (req, res) => {

    const {
        id
    } = req.params;
    const {
        _id,
        ...resto
    } = req.body;

    try {

        /* const removeIndex = publicaciones
            .map(publicacion => publicacion.user.toString() === req.user.id) */


        const publicaciones = await Publicacion.findByIdAndUpdate(id, resto, {
            new: true
        });

        res.json({
            msg: 'Datos del publicaciones actualizados exitosamente',
            publicaciones
        });

    } catch (error) {
        console.log('Error al actualizar los datos del publicaciones: ', error);
    }

};

ctrlPublicacion.rutaDeletePublicacion = async (req, res) => {

    const {
        id
    } = req.params;

    try {

        await Publicacion.findByIdAndDelete(id)
        res.json({
            msg: 'publicaciones eliminado correctamente'
        })
    } catch (error) {
        console.log('Error al eliminar publicaciones: ', error)
    }
}

module.exports = ctrlPublicacion;