'use strict';

const todo = require('./todo.schema');
const model = require('../mongo');

class Todo extends model {
    constructor(){
        super(todo);
    }
}

module.exports = new Todo();