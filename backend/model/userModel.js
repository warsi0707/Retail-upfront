const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    fullName: {type: String},
    email: {type: String, uniqure:true, required: true},
    password: {type: String},
    role: {
        type: String,
        enum: ['ADMIN', 'USER'],
        default: 'USER'
    },
    orders : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    }]
})

const User = mongoose.model('User', userModel)
module.exports = {
    User
};