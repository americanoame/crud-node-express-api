const Product = require('../models/productModels')


// get all products
const getProducts = async(req, res) => {
    try {
         const products = await Product.find({});
         res.status(200).json(products);
        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}


// get a single product
const getProduct = async(req, res) => {
    try {
        const {id} = req.params;
         const product = await Product.findById(id);
         res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}

// create a product
const createProduct = async(req, res)  => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

// update product
const updateProduct = async(req, res) => {
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
}

// delete products

const deleteProduct = async(req, res) => {
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
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}