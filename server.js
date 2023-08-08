const mongoose = require('mongoose');

const express = require('express');

const app = express();



mongoose.connect('mongodb+srv://andrenations:TUNdraLF49UVrbu6@cluster0.rlurztn.mongodb.net/?retryWrites=true&w=majority')

.then(() => {
    console.log('connected to db');
})
.catch((err) => {
    console.log(err.massage);
});




// routes

app.get('/', (req, res)  => {
    res.send('hello Node Api')
})

app.get('/this', (req, res)  => {
    res.send('this is it')
})
 

app.listen(3000, ()=> {
    console.log('Node Api is running on port 3000')
})



// TUNdraLF49UVrbu6

// mongodb+srv://andrenations:TUNdraLF49UVrbu6@cluster0.rlurztn.mongodb.net/crud?retryWrites=true&w=majority