const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

require('../db/connection');
const User = require("../models/userSchema");
const Product = require("../models/productSchema");

router.get('/', (req, res)=> {
    res.send("Hello World from Server Router");
});

// REGISER

router.post('/register', async (req, res) => {

    const {name, sname, phone, email, password, cpassword} = req.body;

    if(!name || !sname || !phone || !email || !password || !cpassword) {
        return res.status(422).json({error:"Please fill details correctly"});
    }

    try{

        const userExist = await User.findOne({email: email});

        if(userExist) {
            return res.status(422).json({ error: "Email already exits"});
        }
        else if(password != cpassword) {
            return res.status(422).json({ error: "Password dosen't match"});
        }

        const user = new User({name, sname, phone, email, password, cpassword});

        const userRegister = await user.save();
        
        if(userRegister) {
            return res.status(201).json({ message: "Registered Successfully!"});
        }
        else {
            res.status(500).json({ error: "Registration Failed!"});
        }

    }
    catch(err) {
        console.log(err);
    } 

});

//LOGIN

router.post('/login', async (req, res) => {
    console.log("user Login");
    try{
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(422).json({error:"Please fill details correctly"});
        }

        const userLogin = await User.findOne({email: email});

        if(userLogin) {

            const isMatch = await bcrypt.compare(password, userLogin.password); 

            const token = await userLogin.generateAuthToken();

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() +86400000),
                httpOnly: true
            });

            if(isMatch) {
                res.json({ message: "Login Successfully!"});
            }
            else {
                res.status(400).json({ message: "Incorrect Password"});
            }

        }
        else {
            res.status(400).json({ message: "User Not Exist"});
        }

    }
    catch(err) {
        console.log(err);
    }

});

//Add product

router.post('/addProduct', async (req, res) => {

    const {pid, pname, pcategory, pquantity, pprice} = req.body;

    try{

        const product = new Product({pid, pname, pcategory, pquantity, pprice});

        const user = await User.findOneAndUpdate({_id: req.params.id},{products:product});
        
        const productAdded = await user.save();
        
        if(productAdded) {
            return res.status(201).json({ message: "Product Added Successfully!"});
        }
        else {
            res.status(422).json({ error: "Failed!"});
        }

    }
    catch(err) {
        console.log(err);
    } 

});


//Menubar

router.get('/menubar', authenticate, (req, res)=> {
    console.log("Hello Manubar");
    res.send(req.rootUser);
});

router.get('/logout', authenticate, (req, res)=> {
    console.log("Hello Logout");
    res.clearCookie('jwtoken', {path: '/'});
    res.status(200).send('User Logout');
});

module.exports = router;