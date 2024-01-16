const questions = require("../controllers/questions.controller.js");

const router = require("express").Router();

// Add new Question
router.post("/:surveyId/", questions.create);

// Retrieve all questions
router.get("/:surveyId/", questions.findAll);

// Update a question with id
router.put("/:surveyId/:id", questions.update);

// Delete a question with id
router.delete("/:surveyId/:id", questions.deleteOne);

// Delete all question within survey
router.delete("/:surveyId/", questions.deleteAll);

module.exports = router;
