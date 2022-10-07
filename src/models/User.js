const {
    model,
    Schema
} = require('mongoose');

const UserSchema = new Schema({

    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    contrasenia: {
        type: String,
        required: true
    },
    domicilio: {
        type: String,
        required: true
    },
    localidad: {
        type: String,
        required: true
    },
    dni: {
        type: String,
        required: true,
        unique: true
    },
    telefono: [{ type: String, required: true }],

    email: {type: String, required: true, unique: true},



    userType: { type: String, },


        dataAlumno: {

    tituloSecundario: {
        type: String,
        //required: true,
    },

        },

        dataProfesor: {

        titulos: [{type: String}],

        materiasEncargadas: [{
            type: Schema.Types.ObjectId,
            ref: "materia"
        }],

    },

    activo: {type: Boolean, default: true}

})

UserSchema.methods.toJSON = function () {
    const {
        contrasenia,
        _id,
        ...usuario
    } = this.toObject();
    usuario.uid = _id;

    return usuario;
}

module.exports = model('user', UserSchema);