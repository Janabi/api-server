'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
    category: {type: String, required: true},
    name: {type: String, required: true},
    display_name: {type: String, required: true},
    description: {type: String, required: true},
    inStock: {type: Number, default: 0, required: true},
    price: {type: Number, default: 0, required: true}
})

module.exports = mongoose.model('products', products);