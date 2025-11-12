const Order = require("../model/orderSchema");
const Product = require("../model/productModel");

const booking = async(req ,res)=>{
    const {id} = req.params;
    const {fullName, email, address, city, pincode, contact, totalPrice, quantity} = req.body;
    try{
        if(!fullName || !email || !address || !city || !pincode || !contact || !totalPrice || !quantity){
             return res.status(404).json({
            error: "All input required"
        })
        }
        const product = await Product.findById(id)
        if(product && product.stock <= 0 ){
            return res.status(404).json({
                error: "This product out of stock"
            })
        }
        const newOrder = await Order.create({
            costumerId: req.user.userId,
            productId: id,
            fullName,
            email,
            address,
            city,
            pincode,
            contact,
            totalPrice
        })
        product.stock = product.stock - quantity
        product.save()

        return res.json({
            message: "Booking successfull",
            bookng: newOrder
        })
    }catch(error){
        return res.status(404).json({
            error: error
        })
    }
}

const getBookings =async(req,res)=>{
    try{
        const orders = await Order.find({
            costumerId: req.user.userId
        }).populate("productId")
        return res.json({
            orders: orders
        })
    }catch(error){
        return res.status(404).json({
            error: error
        })
    }
}
const removeBooking = async(req,res)=>{
    const {id} = req.params;
    try{
        const order = await Order.findByIdAndDelete({_id:id})
        if(!order){
            return res.status(404).json({
                error: "Order not found"
            })
        }
        return res.json({
            message: "Order removed",
            order: order
        })
    }catch(error){
        return res.status(404).json({
            error: error
        })
    }
}

module.exports = {
    booking,
    getBookings,
    removeBooking
}