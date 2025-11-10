const express = require("express");
const { userSignup } = require("../controllers/auth");
const authRouter = express.Router()

authRouter.post("/signup", userSignup)

module.exports = authRouter;