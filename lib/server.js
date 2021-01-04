'use strict';

const express = require('express');
// Require Global Middleware
const timestamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');


require('dotenv').config();

const app = express();

// Use Global Middleware
app.use(express.json());
app.use(timestamp);
app.use(logger);

// Setup the routes
let db = {
    "categories": [
        {
            "name": "electronic",
            "display_name": "apple",
            "desription": "Nup",
            "id": 1
        }
    ],
    "products": [
        {
            "category": "electronic",
            "name": "apple",
            "display_name": "mac",
            "desription": "hi",
            "id": 1
        }
    ]
}

// products routes
app.post('/products', (req, res)=>{
    db.products.push(req.body);
    console.log("successfully inserted a product")
    res.status(201).json(db.products);
})

app.get('/products', (req, res)=>{
    console.log("successfully Showed the products")
    res.status(201).json(db.products);
})

app.get('/products/:id', (req, res)=>{
    let id = req.params.id;
    db.products.forEach((value)=>{
        if(value.id == id) {
            console.log("successfully Showed the selected product")
            res.status(201).json(value);
        }
    })
    console.log("Opps! the id you have inserted is not exist!")
})

app.put('/products/:id', (req, res)=>{
    let id = req.params.id;
    db.products.forEach((value, index)=>{
        if(value.id == id) {
            db.products.splice(index, 1, req.body);
            console.log("successfully Updated the selected product")
            res.status(201).json(db.products);
        }
    })
    console.log("Opps! the id you have inserted is not exist!")
})

app.delete('/products/:id', (req, res)=>{
    let id = req.params.id;
    db.products.forEach((value, index)=>{
        if(value.id == id) {
            db.products.splice(index, 1);
            console.log("successfully Deleted the selected product")
            res.status(201).json(db.products);
        }
    })
    console.log("Opps! the id you have inserted is not exist!")
})

// categories routes
app.post('/categories', (req, res)=>{
    db.categories.push(req.body);
    console.log("successfully inserted a category")
    res.status(201).json(db.categories);
})

app.get('/categories', (req, res)=>{
    console.log("successfully Showed the categories")
    res.status(201).json(db.categories);
})

app.get('/categories/:id', (req, res)=>{
    let id = req.params.id;
    db.categories.forEach((value)=>{
        if(value.id == id) {
            console.log("successfully Showed the selected category")
            res.status(201).json(value);
        }
    })
    console.log("Opps! the id you have inserted is not exist!")
})

app.put('/categories/:id', (req, res)=>{
    let id = req.params.id;
    db.categories.forEach((value, index)=>{
        if(value.id == id) {
            db.categories.splice(index, 1, req.body);
            console.log("successfully Updated the selected category")
            res.status(201).json(db.categories);
        }
    })
    console.log("Opps! the id you have inserted is not exist!")
})

app.delete('/categories/:id', (req, res)=>{
    let id = req.params.id;
    db.categories.forEach((value, index)=>{
        if(value.id == id) {
            db.categories.splice(index, 1);
            console.log("successfully Deleted the selected category")
            res.status(201).json(db.categories);
        }
    })
    console.log("Opps! the id you have inserted is not exist!")
})

//error detection 500
app.get('/error', (req,res)=>{
    throw new Error("500 Error");
})


// Error Global middleware
const errorHandler = require('./middleware/500');
const notFoundHandler = require('./middleware/404');
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    server: app,
    start: () =>{
        const PORT = process.env.PORT;
        app.listen(PORT, ()=>{
            console.log(`We are listening on ${PORT}`);
        })
    }
}