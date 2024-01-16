"use strict";
const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("surveys", {
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
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      start_date: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      end_date: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "active",
      },
      tenant_id: {
        allowNull: true,
        type: DataTypes.STRING,
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
    return await queryInterface.dropTable("surveys");
  },
};
