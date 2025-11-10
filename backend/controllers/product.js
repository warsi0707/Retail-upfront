const Product = require("../model/productModel")

const allProducts = async(req, res)=>{
    try{
        const products = await Product.find({})
        return res.json(products)
    }catch(error){
        return res.status(404).json({
            error
        })
    }
}
const productById = async(req, res)=>{
    const {id} = req.params;
    try{
        const product = await Product.findById({id})
        if(!product){
            return res.status(404).json({
                error: "Not found"
            })
        }
    }catch(error){
        return res.status(404).json({
            error: error
        })
    }
}

module.exports = {
    allProducts,
    productById
}