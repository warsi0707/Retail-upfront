const express = require("express");
const { userSignup, userSignin, userProfile } = require("../controllers/auth");
const AuthChecker = require("../middleware/AuthChecker");
const authRouter = express.Router()

authRouter.post("/signup", userSignup)
.post("/signin", userSignin)
.get("/profile", AuthChecker, userProfile)

module.exports = authRouter;