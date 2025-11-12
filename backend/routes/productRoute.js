const express = require("express");
const { allProducts, productById, searchProduct } = require("../controllers/product");
const productRouter = express.Router()

productRouter.get("/", allProducts)
.get("/search/", searchProduct)
.get("/:id", productById)

module.exports = productRouter