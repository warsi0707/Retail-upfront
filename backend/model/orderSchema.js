const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    costumerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    fullName : {type: String, required: true},
    email: {type: String},
    address: {type: String, required: true},
    city: {type: String},
    pincode: {type: String},
    contact : {type: String},
    totalPrice: {type: Number, required: true},
    status: {
        type: String,
        enum: ['Pending',"Processing","Completed", "Cancelled"],
        default: 'Pending'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order;