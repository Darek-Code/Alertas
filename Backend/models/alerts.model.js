const mongoose = require('mongoose');
const autopopulate = require('mongoose-autopopulate');
const types = mongoose.Schema.Types;
const alertsSchema = new mongoose.Schema({
    "_id": {
        type: types.ObjectId,
        required: [true, "Falta el ID"]
    },
    "fecha": {
        type: types.Date,
        require: [true, "Falta la fecha"]
    },
    "calle": {
        type: types.String,
        require: [true, "Falta la calle"],
        maxlength: [255, "El nombre de la calle es demasiado largo"],
        minlength: [5, "El nombre de la calle es demasiado corto"],
    },
    "tipoIncidencia": {
        type: types.String,
        required: [trude, "Falta la calle"],
        enum: ["robo", "asesinato", "agresion"]
    },
    "user": {
        ref: "users",
        type: types.ObjectId,
        autopopulate: true,
    }
})

alertsSchema.plugin(autopopulate);
module.exports = mongoose.model('alerts', alertsSchema);