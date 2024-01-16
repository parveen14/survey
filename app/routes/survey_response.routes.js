const surveys = require("../controllers/survey_response.controller.js");

const router = require("express").Router();

// Create a new Survey response
router.post("/:surveyId/", surveys.create);

// Retrieve all Surveys response
router.get("/:surveyId/", surveys.findAll);

// Delete a Survey response with id
router.delete("/:surveyId/:id", surveys.deleteOne);

module.exports = router;
