const express = require("express");
const { allProducts, productById } = require("../controllers/product");
const productRouter = express.Router()

productRouter.get("/", allProducts)
.get("/:id", productById)

module.exports = productRouter