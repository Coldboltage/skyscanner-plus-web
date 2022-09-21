const express = require("express")

const {httpCreateUser, httpUserTest, httpUpdateUserByReference, httpCheckEmailAddress, httpCheckFlightsTodayByFingerPrintId, httpGetFlightsBySub} = require("./user.controller")

const userRouter = express.Router()

userRouter.get("/test", httpUserTest)
userRouter.post("/create", httpCreateUser)
userRouter.post("/update", httpUpdateUserByReference)
userRouter.post("/check-email-address", httpCheckEmailAddress)
userRouter.post("/check-flight-amount-by-fingerprintid", httpCheckFlightsTodayByFingerPrintId)
userRouter.post("/get-flights-by-sub", httpGetFlightsBySub)

module.exports = userRouter


