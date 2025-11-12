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
        const product = await Product.findById({_id:id})
        if(!product){
            return res.status(404).json({
                error: "Not found"
            })
        }
        return res.json({
            product: product
        })
    }catch(error){
        return res.status(404).json({
            error: error
        })
    }
}
const searchProduct = async(req, res)=>{
    const {query} = req.query
    try{
        const products = await Product.find({
            $or: [
                {title: {$regex: query, $options: "i"}},
                {category: {$regex: query, $options: "i"}}
            ]
        })
        if(products.length <=0){
            return res.status(404).json({
                error: "Not found",
                products: []
            })
        }
        return res.json({
            products: products
        })
    }catch(error){
        return res.status(404).json({
            error: error
        })
    }
}

module.exports = {
    allProducts,
    productById,
    searchProduct
}