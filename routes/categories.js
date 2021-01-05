'use strict';

const express = require('express');
const categories = require('../lib/models/categories/categories.collection')

const router = express.Router();
router.post('/categories', postCategory);
router.get('/categories', getCategory);
router.get('/categories/:id', getCategory);
router.put('/categories/:id', updateCategory);
router.delete('/categories/:id', deleteCategory);

// categories routes
function getCategory (req, res, next) {
    let id = req.params.id;
    categories.read(id).then(data=>{
        res.status(200).json(data);
    })
    .catch(next);
}

function postCategory (req, res, next){
    categories.create(req.body).then(data=>{
        res.status(201).json(data);
    })
    .catch(next);
}

function updateCategory (req, res, next){
    let id = req.params.id;
    categories.update(id, req.body).then(()=>{
        categories.read(id).then(data=>{
            res.status(200).json(data);
        })
    })
    .catch(next);
}

function deleteCategory (req, res, next){
    let id = req.params.id;
    categories.delete(id).then(data=>{
        res.status(200).json(data);
    })
    .catch(next);
}

module.exports = router;