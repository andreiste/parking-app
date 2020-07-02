const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Parking = new Schema({
    parkingCode : String,
    adresa : String,
    dateTime : Date,
    locuriTotal : Number,
    locuriOcupateInitial: Number,
    rataOcupare: Number,
    rataEliberare: Number,
    locuriActuale: Number,
    locuriVacante: Number,
    procentOcupare: Number,
    crestereProcentuala: Number,
    isActive: Boolean
});

module.exports = mongoose.model('Parking',Parking);