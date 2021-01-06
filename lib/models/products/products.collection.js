'use strict';

const products = require('./products.schema');
const model = require('../mongo');

class Product extends model {
    constructor(){
        super(products);
    }
}

module.exports = new Product();