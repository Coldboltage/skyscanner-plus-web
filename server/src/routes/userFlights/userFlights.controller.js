const {
  checkMaximumHoliday,
  getAllDocuments,
  getAllReferences,
  fireEvents,
  getAllEmails,
  getInfoandLatestFlightsByReference,
  checkEmailAddress,
  getReferencesByEmailAddress,
} = require("../../models/userFlight.model");

const httpGetLatestFlightsByReference = async (req, res) => {
  console.log(req.body);
  // console.log("I think I was called!! Wooot")
  return res.status(200).json(await checkMaximumHoliday(req.body.reference));
};

const httpGetAllDocuments = async (req, res) => {
  return res.status(200).json(await getAllDocuments());
};

const httpGetAllReferences = async (req, res) =>
  res.status(200).json(await getAllReferences());

const httpGetReferences = async (req, res) => {
  return res.status(200).json(await getAllDocuments());
};

const httpFireEvents = (req, res) => {
  fireEvents(req.body.reference);
  return res.status(200).json({ fired: "successfull" });
};

const httpGetAllEmails = async (req, res) => {
  return res.status(200).json(await getAllEmails());
};

const httpGetInfoandLatestFlightsByReference = async (req, res) => {
  console.log(
    `httpGetInfoandLatestFlightsByReference fired. reference = ${req.body.reference}`
  );
  const result = await getInfoandLatestFlightsByReference(req.body.reference);
  if (result === null) {
    return res
      .status(409)
      .json({ error: "Reference doesn't exist on database" });
  } else {
    const latestFlights = await checkMaximumHoliday(req.body.reference);
    return res.status(200).json({ latestFlights, result });
  }
};

const httpCheckEmailAddress = async (req, res) => {
  console.log(`httpCheckEmailAdress fired. email = ${req.body.email}`)
  const outcome = await checkEmailAddress(req.body.email)
  if (outcome){
    console.log("This is true")
    const refResults = await getReferencesByEmailAddress(req.body.email)
    console.log(refResults)
    return res.status(200).json({message: "Email Address exists", result: refResults})
  } else {
    console.log("This is false")
    return res.status(409).json({message: "No flights found with that email address"})
  }
  
}

module.exports = {
  httpGetLatestFlightsByReference,
  httpGetAllDocuments,
  httpFireEvents,
  httpGetAllReferences,
  httpGetAllEmails,
  httpGetInfoandLatestFlightsByReference,
  httpCheckEmailAddress,

};
