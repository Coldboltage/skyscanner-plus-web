const express = require("express")
const {httpGetLatestFlightsByReference, httpGetAllDocuments, httpFireEvents, httpGetAllReferences, httpGetAllEmails, httpGetInfoandLatestFlightsByReference} = require("./userFlights.controller")

const flightsRouter = express.Router()

flightsRouter.get("/", httpGetAllDocuments)
flightsRouter.post("/reference-latest-flight", httpGetLatestFlightsByReference)
flightsRouter.post("/reference-info-latest-flight", httpGetInfoandLatestFlightsByReference)
flightsRouter.post("/fire-reference", httpFireEvents)
flightsRouter.get("/get-references", httpGetAllReferences)
flightsRouter.get("/get-all-emails", httpGetAllEmails)


module.exports = flightsRouter