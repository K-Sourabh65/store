const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    pid: {
        type: String,
        required: true
    },
    pname: {
        type: String,
        required: true
    },
    pcategory: {
        type: String,
        required: true
    },
    pquantity: {
        type: Number,
        required: true
    },
    pprice: {
        type: Number,
        required: true
    }
});


const Product = mongoose.model('PRODUCT', productSchema);

module.exports = Product;