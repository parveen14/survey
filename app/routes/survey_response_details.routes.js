const surveyResponseDetails = require("../controllers/survey_response_details.controller.js");

const router = require("express").Router();

// Create a new Survey response
router.post("/:surveyResponseId/", surveyResponseDetails.create);

// Retrieve all Surveys response
router.get("/:surveyResponseId/", surveyResponseDetails.findAll);

// Delete a Survey response with id
router.delete("/:surveyResponseId/:id", surveyResponseDetails.deleteOne);

module.exports = router;
