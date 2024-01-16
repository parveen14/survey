const question_options = require("../controllers/question_options.controller.js");

const router = require("express").Router();

// Add Options
router.post("/:questionId/", question_options.create);

// Retrieve all options of question
router.get("/:questionId/", question_options.findAll);

// Update a options
router.put("/:questionId/:id", question_options.update);

// Delete a option
router.delete("/:questionId/:id", question_options.deleteOne);

// Delete all option within question
router.delete("/:questionId/", question_options.deleteAll);

module.exports = router;
