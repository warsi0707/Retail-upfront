const express = require("express");
const AuthChecker = require("../middleware/AuthChecker");
const upload = require("../utils/Multer");
const { postProduct, getProducts, updateProduct, deleteProduct, deactivateProduct, allOrders } = require("../controllers/admin");
const adminRouter = express.Router()

adminRouter.post("/product", AuthChecker, upload.single('photo'), postProduct)
.get("/orders",AuthChecker, allOrders)
.get("/product", AuthChecker, getProducts)
.put("/product/:id", AuthChecker, updateProduct)
.delete("/product/:id", AuthChecker, deleteProduct)
.put("/product/down/:id", AuthChecker, deactivateProduct)

module.exports = adminRouter;