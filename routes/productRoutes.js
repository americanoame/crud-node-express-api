const express = require('express');
const Product = require('../models/productModels');
const {
    getProducts, 
    getProduct, createProduct, 
    updateProduct, deleteProduct} = 
    require('../controllers/productController');

const router = express.Router();

// routes

// 2part getting data from the database
router.get('/', getProducts);


// 3part find products by :id 
router.get('/:id', getProduct)



// 1part creating data in the database 
router.post('/', createProduct)


// update a product 
router.put('/:id', updateProduct)


// delete a product
router.delete('/:id', deleteProduct)

module.exports = router;