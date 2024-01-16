const db = require("../models");
const QuestionOptions = db.question_options;
const Op = db.Sequelize.Op;

// Create and Save a new Question
function create(req, res) {
  const questionId = req.params.questionId;
  if (!Array.isArray(req.body) || !req.body.length) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }
  // Add options
  const options = req.body.map((data) => {
    return {
      ...data,
      question_id: questionId,
    };
  });

  QuestionOptions.bulkCreate(options)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the options.",
      });
    });
}

// Retrieve all Options within question.
function findAll(req, res) {
  const questionId = req.params.questionId;
  const condition = { question_id: questionId };

  QuestionOptions.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Surveys options",
      });
    });
}

// Update a question by the id in the request
function update(req, res) {
  const id = req.params.id;
  const questionId = req.params.questionId;

  const option = {
    ...req.body,
    question_id: questionId,
  };

  QuestionOptions.update(option, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "option was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update option with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating option with id=" + id,
      });
    });
}

// Delete a option with the specified id in the request
function deleteOne(req, res) {
  const id = req.params.id;
  const questionId = req.params.questionId;

  QuestionOptions.destroy({
    where: { id: id, question_id: questionId },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "option was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete option with id=${id}. Maybe option was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete option with id=" + id,
      });
    });
}

// Delete all option within survey.
function deleteAll(req, res) {
  const questionId = req.params.questionId;
  Questions.destroy({
    where: { question_id: questionId },
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
