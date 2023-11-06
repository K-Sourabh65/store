const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    sname: {
        type: String,
        required: true
    },
    sphone: {
        type: Number,
        required: true
    }
});

const Supplier = mongoose.model('SUPPLIER', supplierSchema);

module.exports = Supplier;