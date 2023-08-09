const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModels')
const app = express();

app.use(express.json())



// routes

app.get('/blog', (req, res)  => {
    res.send('hello Node Api')
})

app.post('/product', async(req, res)  => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

mongoose.connect('mongodb+srv://andrenations:TUNdraLF49UVrbu6@cluster0.rlurztn.mongodb.net/?retryWrites=true&w=majority')

.then(() => {
    console.log('connected to db');
})
.catch((err) => {
    console.log(err.massage);
});


 

app.listen(3000, ()=> {
    console.log('Node Api is running on port 3000')
})



