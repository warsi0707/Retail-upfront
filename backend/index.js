require('dotenv').config()
const express = require('express')
const DbConnect = require('./utils/DatabaseConnect')
const app = express()


DbConnect()

const Main =()=>{
    app.listen(3000)
    console.log("App listing on port 3000")
}
Main()