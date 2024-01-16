const express = require("express");

const questions = require("./questions.routes");
const questionOptions = require("./question_options.routes");
const survey = require("./survey.routes");
const surveyResponse = require("./survey_response.routes");
const surveyResponseDetails = require("./survey_response_details.routes");

const routes = express.Router();

routes.use("/api/questions", questions);
routes.use("/api/question_options", questionOptions);
routes.use("/api/surveys", survey);
routes.use("/api/survey_response", surveyResponse);
routes.use("/api/survey_response_details", surveyResponseDetails);

module.exports = routes;
