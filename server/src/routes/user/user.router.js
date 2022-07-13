const express = require("express")

const {httpCreateUser, httpUserTest, httpUpdateUserByReference, httpCheckEmailAddress} = require("./user.controller")

const userRouter = express.Router()

userRouter.get("/test", httpUserTest)
userRouter.post("/create", httpCreateUser)
userRouter.post("/update", httpUpdateUserByReference)
userRouter.post("/check-email-address", httpCheckEmailAddress)

module.exports = userRouter


