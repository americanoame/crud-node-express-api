require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoutes')

const app = express();

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

app.use(express.json())


app.use('/api/products', productRoute);


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



