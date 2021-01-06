'use strict';

const categories = require('./categories.schema');
const model = require('../mongo');

class Category extends model {
    constructor(){
        super(categories);
    }
}

module.exports = new Category();