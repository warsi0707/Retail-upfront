const mongoose = require('mongoose')

const userModel = new mongoose({
    fullName: {type: String},
    email: {type: String, uniqure:true, required: true},
    password: {type: String},
    role: {
        type: String,
        enum: ['ADMIN', 'USER'],
        default: 'USER'
    }
})

const User = mongoose.model('User', userModel)
module.exports = User;