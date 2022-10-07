const {
    model,
    Schema
} = require('mongoose');

const MateriaSchema = new Schema({


    nombre: {

        type: String,

    },

    carrera: {

        type: String
    },

    horarios: {

        type: Date,
        default: Date.now()

    },

    inasistenciaAlumnos: {
        fecha: {
            type: Date,
        default: Date.now()

        },
        alumnos: [{
            type: Schema.Types.ObjectId,
            ref: "user"
        }]
    },

    profesorEncargado: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },

    profesorAuxiliciar: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },

    notas: {

        alumno: {
            type: Schema.Types.ObjectId,
            ref: "user"
        },

        etapa: {
            type: String,
            enum: ["Primer cuatrimestre", "Segundo cuatrimestre"]
        },

        examen: {
            type: String,
            enum: ["Primer parcial", "Segundo parcial", "Recuperatorio"]
        },

        calificacion: {
            type: Number
        }

    }



})

module.exports = model('materia', MateriaSchema)