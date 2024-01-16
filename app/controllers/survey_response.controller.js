const db = require("../models");
const SurveyResponse = db.survey_response;
const Op = db.Sequelize.Op;

// save survey response
function create(req, res) {
  const surveyId = req.params.surveyId;

  // Add Question
  const question = {
    ...req.body,
    survey_id: surveyId,
  };

  // Save Survey in the database
  SurveyResponse.create(question)
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

// Retrieve all response within survey.
function findAll(req, res) {
  const surveyId = req.params.surveyId;
  const condition = { survey_id: surveyId };

  SurveyResponse.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving Surveys response",
      });
    });
}

// Delete a survey response by id
function deleteOne(req, res) {
  const id = req.params.id;
  const surveyId = req.params.surveyId;

  SurveyResponse.destroy({
    where: { id: id, survey_id: surveyId },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "survey response was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete survey response with id=${id}. Maybe survey response was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete survey response with id=" + id,
      });
    });
}

module.exports = {
  create,
  findAll,
  deleteOne,
};
