require('dotenv').config()
const express = require('express')
const DbConnect = require('./utils/DatabaseConnect')
const adminRouter = require('./routes/adminRoute')
const authRouter = require('./routes/authRouter')
const productRouter = require('./routes/productRoute')
const userRouter = require('./routes/userRoute')
const app = express()


DbConnect()

app.use(express.json())

app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/product", productRouter)
app.use("/api/v1/user", userRouter)


const Main =()=>{
    app.listen(3000)
    console.log("App listing on port 3000")
}
Main()