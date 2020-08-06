const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Expensas = mongoose.model('Expensas', new Schema({
    _id: {type: Schema.Types.ObjectId, ref: 'Expensas'},
    Edificio: String,
    Descripcion: String,
    Saldo: String
}))

module.exports = Expensas 