const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sname: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    products: [
        {
            pid: {
                type: String,
                required: true
            },
            pname: {
                type: String,
                required: true
            },
            pcategory: {
                type: String,
                required: true
            },
            pquantity: {
                type: Number,
                required: true
            },
            pprice: {
                type: Number,
                required: true
            }
        }
    ],
    customers: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'CUSTOMER'
        }
    ],
    suppliers: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'SUPPLIER'
        }
    ],
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});


// HASHING PASSWORDS

userSchema.pre('save', async function(next) {

    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();

});

// GENERATING TOKEN

userSchema.methods.generateAuthToken = async function() {
    try{
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    }
    catch(err) {
        console.log(err);
    }
}


const User = mongoose.model('USER', userSchema);

module.exports = User;
