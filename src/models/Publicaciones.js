const mongoose = require('mongoose')
const Schema = mongoose.Schema



const PublicacionesSchema = new Schema({
    
    user:{type:Schema.Types.ObjectId, ref: 'User'},

    

    texto: {
        type: String,
        required: true
    },

    tipodePublicacion: {

        type: String,
        enum: ["Anuncios", "Dudas", "Informacion"]
    },


    commentarios: [{
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        texto: {
            type: String,
            required: true
        },
        date: {

            type: String,
            type: Date,
            default: Date.now()
        },
    }],

    date: {
        type: String,
        type: Date,
        default: Date.now()
    },

})

module.exports = Publicaciones = mongoose.model('publicaciones', PublicacionesSchema)