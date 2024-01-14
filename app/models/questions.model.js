module.exports = (sequelize, Sequelize) => {
  const Questions = sequelize.define("questions", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: Sequelize.STRING
    },
    survey_id: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    question_type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    validation: {
      type: Sequelize.JSON,
      allowNull: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'updated_at'
    },
    created_by: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    updated_by: {
      allowNull: true,
      type: Sequelize.STRING,
    }
  }, {
    underscored: true
  });

  return Questions;
};