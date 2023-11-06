const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    cname: {
        type: String,
        required: true
    },
    cphone: {
        type: Number,
        required: true
    }
});

const Customer = mongoose.model('CUSTOMER', customerSchema);

module.exports = Customer;