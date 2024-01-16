const db = require("../models");
const SurveyResponseDetails = db.survey_response_details;
const SurveyResponse = db.survey_response;
const Questions = db.questions;

const Op = db.Sequelize.Op;

// save survey response
async function create(req, res) {
  const surveyResponseId = req.params.surveyResponseId;

  if (!Array.isArray(req.body) || !req.body.length) {
    res.status(400).send({
      message: "Bad request",
    });
  }

  const responseExist = await SurveyResponse.findOne({where: {id:surveyResponseId}});
  if(!responseExist) {
    return res.status(400).send({
      message: "Bad request",
    });
  }
  const questions = await Questions.findAll({where:{survey_id:responseExist.survey_id}, include: 'question_options'})
  if(!responseExist) {
    return res.status(400).send({
      message: "Bad request",
    });
  }
  // Add Response
  let error = false;
  const response = req.body.map((answers) => {
    if (!answers.question_id || !answers.option_id) {
      error = true;
      return;
    }
    const question = questions.find((data)=> data.id===answers.question_id);
    const option = question?.question_options?.find((data)=> data.id===answers.option_id);
    if (!question || !option) {
      error = true;
      return;
    }
    return {
      ...answers,
      score: option.score,
      survey_response_id: surveyResponseId,
    };
  });
  if (error) {
    res.status(400).send({
      message: "Bad request",
    });
  } else {
    // Save Survey in the database
    SurveyResponseDetails.bulkCreate(response)
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
}

// Retrieve all response within survey.
function findAll(req, res) {
  const surveyId = req.params.surveyResponseId;
  const condition = { survey_response_id: surveyId };

  SurveyResponseDetails.findAll({ where: condition })
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
  const surveyResponseId = req.params.surveyResponseId;

  SurveyResponseDetails.destroy({
    where: { id: id, survey_response_id: surveyResponseId },
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
