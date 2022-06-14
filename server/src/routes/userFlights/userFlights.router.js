const express = require("express")
const {httpGetLatestFlightsByReference, httpGetAllDocuments, httpFireEvents, httpGetAllReferences, httpGetAllEmails} = require("./userFlights.controller")

const flightsRouter = express.Router()

flightsRouter.get("/", httpGetAllDocuments)
flightsRouter.post("/reference", httpGetLatestFlightsByReference)
flightsRouter.post("/fire-reference", httpFireEvents)
flightsRouter.get("/get-references", httpGetAllReferences)
flightsRouter.get("/get-all-emails", httpGetAllEmails)


module.exports = flightsRouter