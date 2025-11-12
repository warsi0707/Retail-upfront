require('dotenv').config()
const express = require('express')
const DbConnect = require('./utils/DatabaseConnect')
const adminRouter = require('./routes/adminRoute')
const authRouter = require('./routes/authRouter')
const productRouter = require('./routes/productRoute')
const userRouter = require('./routes/userRoute')
const app = express()
const cors = require("cors")
const { FRONTEND_URL } = require('./utils/Utils')
const path = require("path")

DbConnect()

app.use(express.json())
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: FRONTEND_URL
}))

app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/product", productRouter)
app.use("/api/v1/user", userRouter)


const Main =()=>{
    app.listen(3000)
    console.log("App listing on port 3000")
}
Main()