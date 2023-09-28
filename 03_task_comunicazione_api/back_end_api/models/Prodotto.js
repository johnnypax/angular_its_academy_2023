const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProdottoSchema = new Schema({
    codice: String,
    nome: String,
    prezzo: Number,
    categoria: String,
})

const Prodotto = mongoose.model('Prodotto', ProdottoSchema);
module.exports = Prodotto;