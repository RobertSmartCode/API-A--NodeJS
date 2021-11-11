const express = require('express');

const router = express.Router();

module.exports.ProductsAPI = (app)=>{
    router
    .get('/', (req, res)=>{}) // http://localhost:3000/api/products/
    .get('/:id', (req, res)=>{})// http://localhost:3000/api/products/23
    .post('/', (req, res)=>{});

    app.use('/api/products', router)
}