"use strict";
const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("survey_response_details", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      survey_response_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'survey_responses',
          key: 'id'
        }
      },
      question_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'questions',
          key: 'id'
        }
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      option_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'question_options',
          key: 'id'
        }
      },
      text_answer: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      created_by: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_by: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      deleted_at: {
        type: DataTypes.DATE,
      },
      deleted_by: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("survey_response_details");
  },
};
