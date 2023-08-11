const express = require('express');
const Product = require('../models/productModels')
const router = express.Router();



// routes

// 2part getting data from the database

router.get('/', async(req, res) => {
    try {
         const products = await Product.find({});
         res.status(200).json(products);
        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})

// 3part find products by :id 

router.get('/:id', async(req, res) => {
    try {
        const {id} = req.params;
         const product = await Product.findById(id);
         res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})



// 1part creating data in the database 

router.post('/', async(req, res)  => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})



// update a product 

router.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product) {
            return res.status(404).json({message: `there's no product wit ID ${id}`})
        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);

    } catch (error) {
      res.status(500).json({message: error.message})  
    }
})

// delete a product

router.delete('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product) {
            return res.status(404).json({message: `there's no product wit ID ${id}`})
        }
       res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router;

