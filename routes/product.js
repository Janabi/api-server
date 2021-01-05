'use strict';

const express = require('express');
const products = require('../lib/models/products/products.collection')

const router = express.Router();
router.post('/products', postProduct);
router.get('/products', getProduct);
router.get('/products/:id', getProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

// products routes
function getProduct (req, res, next) {
    let id = req.params.id;
    products.read(id).then(data=>{
        res.status(200).json(data);
    })
    .catch(next);
}

function postProduct (req, res, next){
    products.create(req.body).then(data=>{
        res.status(201).json(data);
    })
    .catch(next);
}

function updateProduct (req, res, next){
    let id = req.params.id;
    products.update(id, req.body).then(()=>{
        products.read(id).then(data=>{
            res.status(200).json(data);
        })
    })
    .catch(next);
}

function deleteProduct (req, res, next){
    let id = req.params.id;
    products.delete(id).then(data=>{
        res.status(200).json(data);
    })
    .catch(next);
}

module.exports = router;