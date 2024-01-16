const surveys = require("../controllers/survey.controller.js");

const router = require("express").Router();

// Create a new Survey
router.post("/", surveys.create);

// Retrieve all Surveys
router.get("/", surveys.findAll);

// Retrieve a single Survey with id
router.get("/:id", surveys.findOne);

// Update a Survey with id
router.put("/:id", surveys.update);

// Delete a Survey with id
router.delete("/:id", surveys.deleteOne);

// Delete all Surveys
router.delete("/", surveys.deleteAll);

module.exports = router;
