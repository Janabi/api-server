'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// Require Global Middleware
const timestamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const productsRoute = require('../routes/product');
const categoriesRoute = require('../routes/categories');


require('dotenv').config();

const app = express();

// Use Global Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(timestamp);
app.use(logger);


// Use the routes
app.use('/', productsRoute);
app.use('/', categoriesRoute);

// let db = {
//     "categories": [
//         {
//             "name": "electronic",
//             "display_name": "apple",
//             "desription": "Nup",
//             "id": 1
//         }
//     ],
//     "products": [
//         {
//             "category": "electronic",
//             "name": "apple",
//             "display_name": "mac",
//             "desription": "hi",
//             "id": 1
//         }
//     ]
// }

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