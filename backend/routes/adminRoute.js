const express = require("express");
const AuthChecker = require("../middleware/AuthChecker");
const upload = require("../utils/Multer");
const { postProduct, getProducts, updateProduct, deleteProduct } = require("../controllers/admin");
const adminRouter = express.Router()

adminRouter.post("/product", AuthChecker, upload.single('photo'), postProduct)
.get("/product", AuthChecker, getProducts)
.put("/product/:id", AuthChecker, updateProduct)
.delete("/product/:id", AuthChecker, deleteProduct)

module.exports = adminRouter;