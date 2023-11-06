const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');
const { TokenExpiredError } = require('jsonwebtoken');
const app = express();
app.use(cookieParser());

dotenv.config({path:'./config.env'});

require('./db/connection');

app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.use(require('./router/auth'));

const PORT = process.env.PORT;


// app.get('/about', (req, res)=> {
//     res.send("Hello World from About");
// });

// app.get('/contact', (req, res)=> {
//     res.send("Hello World from Contact");
// });

// app.get('/login', (req, res)=> {
//     res.send("Hello World from Login");
// });

// app.get('/register', (req, res)=> {
//     res.send("Hello World from Register");
// });

app.listen(PORT, () => {
    console.log(`Server is running at port on ${PORT}`);
});