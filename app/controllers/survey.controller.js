const db = require("../models");
const Survey = db.survey;
const Op = db.Sequelize.Op;

// Create and Save a new Survey
function create(req, res) {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Survey
  const survey = {
    name: req.body.name,
    start_date: req.body.start_date,
    end_date: req.body.end_date,
    status: req.body.status ? req.body.status : 'inactive'
  };

  // Save Survey in the database
  Survey.create(survey)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Survey."
      });
    });
};

// Retrieve all Surveys from the database.
function findAll(req, res) {
  const title = req.query.title;
  const condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Survey.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Surveys."
      });
    });
};

// Find a single Survey with an id
function findOne(req, res) {
  const id = req.params.id;

  Survey.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Survey with id=" + id
      });
    });
};

// Update a Survey by the id in the request
function update (req, res) {
  const id = req.params.id;

  Survey.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Survey was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Survey with id=${id}. Maybe Survey was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Survey with id=" + id
      });
    });
};

// Delete a Survey with the specified id in the request
function deleteOne(req, res) {
  const id = req.params.id;

  Survey.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Survey was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Survey with id=${id}. Maybe Survey was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Survey with id=" + id
      });
    });
};

// Delete all Surveys from the database.
function deleteAll(req, res) {
  Survey.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Surveys were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Surveys."
      });
    });
};


module.exports = {
  create,
  findAll,
  findOne,
  update,
  deleteOne,
  deleteAll,
};