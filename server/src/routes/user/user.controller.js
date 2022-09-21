const {createUser, userTest, updateUserByReference, checkEmailAddress, checkFlightsTodayByFingerPrintId, getFlightsBySub} = require("../../models/userFlight.model");

const httpCreateUser = async (req, res) => {
  const response = await createUser(req.body)
  if (response === true) {
    res.status(200).json({success: true})
  } else {
    res.status(400).json({error: "There was an error with the object"})
  }
}

const httpUserTest = (req, res) => {
  return res.status(200).json(userTest())
}

const httpUpdateUserByReference = async (req, res) => {
  const response = await updateUserByReference(req.body.reference)
  if (response === true) {
    res.status(200).json({success: true})
  } else {
    res.status(400).json({error: "Error updating"})
  }
}

const httpCheckEmailAddress = async (req, res) => {
  console.log(req.body.email)
  const response = await checkEmailAddress(req.body.email)
  if (response) {
    res.status(200).json(true)
  } else {
    res.status(403).json({message: "true"})
  }
}

const httpGetFlightsBySub = async (req, res) => {
  console.log(req.body.post)
  const response = await getFlightsBySub(req.body.post)
  if (response) {
    res.status(200).json(response)
  } else {
    res.status(403).json({message: "That sub has not booked a flight yet on our database"})
  }
}

const httpCheckFlightsTodayByFingerPrintId = async (req, res) => {
  const response = await checkFlightsTodayByFingerPrintId(req.body.fingerPrintId)
  res.status(200).json(response)
}

module.exports = {
  httpCreateUser,
  httpUserTest,
  httpUpdateUserByReference,
  httpCheckEmailAddress,
  httpCheckFlightsTodayByFingerPrintId,
  httpGetFlightsBySub
}