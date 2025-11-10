const express = require("express");
const { userSignup, userSignin } = require("../controllers/auth");
const authRouter = express.Router()

authRouter.post("/signup", userSignup)
.post("/signin", userSignin)

module.exports = authRouter;