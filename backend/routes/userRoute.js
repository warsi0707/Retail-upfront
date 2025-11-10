const express = require("express");
const { booking, getBookings, removeBooking } = require("../controllers/user");
const AuthChecker = require("../middleware/AuthChecker");
const userRouter = express.Router()

userRouter.post("/booking/:id",AuthChecker, booking)
.get("/bookings", AuthChecker, getBookings)
.delete("/booking/:id", AuthChecker, removeBooking)

module.exports = userRouter;