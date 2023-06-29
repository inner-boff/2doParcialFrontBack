const mongoose = require('mongoose');
//const actividadSchema = require('./Actividad');
//const eventoSchema = require('./Evento');

// el Schema va en mayuscula porque es una clase
// si fuera una función estaría en minúscula

/* 
const destinoSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        stock: {
            type: Number,
            required: true
        }

    }
)
*/

const destinoSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        actividades: {
            // revisar esto
            //type: [actividadSchema],
            type: Object,
            required: true
        },
        eventos: {
            // revisar esto
            //type: [eventoSchema],
            type: Object,
            required: true
        },
        estacion: {
            type: Number,
            required: true
        }

    }
)


module.exports = mongoose.model('Destino', destinoSchema)