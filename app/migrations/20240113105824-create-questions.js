'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable("questions", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      survey_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      question_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      validation: {
        type: DataTypes.JSON,
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

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('questions'); 
  }
};
