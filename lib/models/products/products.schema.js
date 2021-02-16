'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
    category: {type: String, required: true},
    name: {type: String, required: true},
    display_name: {type: String, required: true},
    description: {type: String, required: true},
    quantity: {type: Number, default: 0, required: true}
})

module.exports = mongoose.model('products', products);