const db = require("../models");
const Questions = db.questions;
const Op = db.Sequelize.Op;

// Create and Save a new Question
function create(req, res) {
  const surveyId = req.params.surveyId;

  // Add Question
  const question = {
    ...req.body,
    survey_id: surveyId,
    status: req.body.status ? req.body.status : "inactive",
  };

  // Save Survey in the database
  Questions.create(question)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Question.",
      });
    });
}

// Retrieve all Questions within survey.
function findAll(req, res) {
  const surveyId = req.params.surveyId;
  const condition = { survey_id: surveyId };

  Questions.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving Surveys Questions",
      });
    });
}

// Update a question by the id in the request
function update(req, res) {
  const id = req.params.id;
  const surveyId = req.params.surveyId;

  const question = {
    ...req.body,
    survey_id: surveyId,
  };

  Questions.update(question, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Question was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Question with id=${id}. Maybe Survey was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Question with id=" + id,
      });
    });
}

// Delete a Question with the specified id in the request
function deleteOne(req, res) {
  const id = req.params.id;
  const surveyId = req.params.surveyId;

  Questions.destroy({
    where: { id: id, survey_id: surveyId },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Question was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Question with id=${id}. Maybe Question was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Question with id=" + id,
      });
    });
}

// Delete all question within survey.
function deleteAll(req, res) {
  const surveyId = req.params.surveyId;

  Questions.destroy({
    where: { survey_id: surveyId },
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Questions were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Questions.",
      });
    });
}

module.exports = {
  create,
  findAll,
  update,
  deleteOne,
  deleteAll,
};
