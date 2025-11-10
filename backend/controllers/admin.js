const Product = require("../model/productModel");


const postProduct = async (req,res)=>{
    const {title, description, price, stock, category} = req.body;
    try{
        if(!title || !price || !stock){
            return res.status(404).json({
                error: "All input required"
            })
        }
        const imageUrl = req.file? req.file.path : false
        const newProduct = await Product.create({
            title,
            description,
            price,
            stock,
            category,
            imageUrl: imageUrl,
            ownerId: req.user.userId
        })
        return res.json({
            message: "Uploaded",
            product: newProduct
        })
    }catch(error){
        return res.status(404).json({
            error: error
        })
    }
}
const updateProduct = async(req, res)=>{
    const {id} = req.params;
      const {title, description, price, stock, category} = req.body;
    
     try{
        const product = await Product.findByIdAndUpdate(
            {_id:id},
            {title, description, price, stock, category}
        )
        return res.json({
            message: "Product updated",
            product: product
        })
    }catch(error){
         return res.status(404).json({
            error: error
        })
    }
}
const getProducts = async(req, res)=>{
    try{
        const products = await Product.find({}).populate('ownerId',"-password")
        if(products.length <=0){
            return res.status({
                error: "No product listed",
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
const deleteProduct = async(req, res)=>{
    const {id} = req.params;
    try{
        const products = await Product.findByIdAndDelete({_id:id})
        return res.json({
            product: products
        })
    }catch(error){
         return res.status(404).json({
            error: error
        })
    }
}


module.exports = {
    postProduct,
    getProducts,
    updateProduct,
    deleteProduct
}