const {Schema, model} = require('mongoose')

const MediaSchema = Schema ({
    serial: {
        type: String,
        required: [true, 'Serial requerido'],
        unique: [true, 'Media ya existe']
    },
    titulo: {
        type: String,
        required: [true, 'Título requerido'],
        minlength: 1
    },
    
    sinopsis: {
        type: String,
        default: true,
        required: [true, 'Sinopsis requerida']
    },

    url: {
        type: String,
    },

    imagen: {
        type: String
    },

    fechaCreacion: {
        type: Date,
        default: new Date()
    },

    fechaActualizacion: {
        type: Date,
        default: new Date()
    },

    añoEstreno: {
        type: Date,
        default: new Date()
    },

    genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
    },

    director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true
    },

    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true
    },

    productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        required: true
    }
})

module.exports = model('Media', MediaSchema)