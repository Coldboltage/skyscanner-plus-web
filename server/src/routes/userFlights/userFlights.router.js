const express = require("express");
const {
  httpGetLatestFlightsByReference,
  httpGetAllDocuments,
  httpFireEvents,
  httpGetAllReferences,
  httpGetAllEmails,
  httpGetInfoandLatestFlightsByReference,
  httpCheckEmailAddress,
  httpResetFlightStatus
} = require("./userFlights.controller");

const flightsRouter = express.Router();

flightsRouter.get("/", httpGetAllDocuments);
flightsRouter.post("/reference-latest-flight", httpGetLatestFlightsByReference);
flightsRouter.post(
  "/reference-info-latest-flight",
  httpGetInfoandLatestFlightsByReference
);
flightsRouter.post("/fire-reference", httpFireEvents);
flightsRouter.get("/get-references", httpGetAllReferences);
flightsRouter.get("/get-all-emails", httpGetAllEmails);
flightsRouter.post("/get-references-by-email", httpCheckEmailAddress);
flightsRouter.get("/status-reset", httpResetFlightStatus)


module.exports = flightsRouter;
