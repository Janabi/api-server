'use strict';

const express = require('express');
const products = require('../lib/models/products/products.collection')
const categories = require('../lib/models/categories/categories.collection')
const todo = require('../lib/models/todo/todo.collection')
// MONGODB_URI='mongodb://localhost:27017/api-server-app'
const router = express.Router();

router.post('/api/v1/:model', postHandler);
router.get('/api/v1/:model', getHandler);
router.get('/api/v1/:model/:id', getHandler);
router.put('/api/v1/:model/:id', updateHandler);
router.delete('/api/v1/:model/:id', deleteHandler);

router.param('model', getModel);

// categories routes
function getHandler (req, res, next) {
    let id = req.params.id;
    req.model.read(id).then(data=>{
        let count = data.length;
        res.status(200).json({count, data});
    })
    .catch(next);
}

function postHandler (req, res, next){
    req.model.create(req.body).then(data=>{
        console.log("post handler ", data)
        res.status(201).json(data);
    })
    .catch(next);
}

function updateHandler (req, res, next){
    let id = req.params.id;
    req.model.update(id, req.body).then(()=>{
        req.model.read(id).then(data=>{
            res.status(200).json(data);
        })
    })
    .catch(next);
}

function deleteHandler (req, res, next){
    let id = req.params.id;
    req.model.delete(id).then(data=>{
        res.status(200).json(data);
    })
    .catch(next);
}

function getModel (req, res, next) {
    let model = req.params.model;
    switch(model) {
        case "products":
            req.model = products;
            next()
            break;
        case "categories":
            req.model = categories;
            next()
            break;
        case "todo":
            req.model = todo;
            next()
            break;
        default:
            next('Invalid Route!! Please try again!')
            break;
    }
}

module.exports = router;