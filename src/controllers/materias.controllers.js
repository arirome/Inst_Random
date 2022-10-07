const ctrlUser = {};
const Materias = require('../models/Materias');

//mostrar materias
ctrlUser.rutaGetMateria = async (req, res) => {

    const materias = await Materias.find();
    res.json(materias);
};


//agrega la materia

ctrlUser.rutaPostMateria = async (req, res) => {
    console.log(req.body)
    const {
        ...resto
    } = req.body;

    //console.log(nombre)
    try {
        const materia = new Materias(resto);

        //Guardar usuario en db
        await materia.save();

        res.json({
            msg: 'Materia agregado exitosamente',
            materia
        });
    } catch (error) {
        console.log('Error al guardar los datos de la materia: ', error);
    };
};



//actualizar materia

ctrlUser.rutaPutMateria = async (req, res) => {

    const {
        id
    } = req.params;
    const {
        _id,
        ...resto
    } = req.body;

    try {

        const materia = await Materias.findByIdAndUpdate(id, resto, {
            new: true
        });

        res.json({
            msg: 'Datos del materia actualizados exitosamente',
            materia
        });

    } catch (error) {
        console.log('Error al actualizar los datos del materia: ', error);
    }

};




module.exports = ctrlUser;