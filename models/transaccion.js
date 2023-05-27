const mongoose = require('mongoose');
const { Schema } = mongoose;
const TransaccionSchema = new Schema({
    monedaOrigen: { type: String, required: true },
    cantidadOrigen: { type: number, required: true },
    monedaDestino: { type: String, required: true },
    cantidadDestino: { type: number, required: true },
    emailCliente: { type: String, required: true },
    tasaConversion: {type: number, required:true}
})
module.exports = mongoose.models.Transaccion || mongoose.model('Transaccion', TransaccionSchema);