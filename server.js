require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModels')
const app = express();

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

app.use(express.json())




// routes

// 2part getting data from the database

app.get('/products', async(req, res) => {
    try {
         const products = await Product.find({});
         res.status(200).json(products);
        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})

// 3part find products by :id 

app.get('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
         const product = await Product.findById(id);
         res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})



// 1part creating data in the database 

app.post('/product', async(req, res)  => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})



// update a product 

app.put('/products/:id', async(req, res) => {
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

app.delete('/products/:id', async(req, res) => {
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


mongoose
.connect(MONGO_URL)

.then(() => {
    console.log('connected to db');
})
.catch((err) => {
    console.log(err.massage);
});

app.listen(PORT, ()=> {
    console.log(`Node Api is running on port ${PORT}`)
})



