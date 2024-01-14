module.exports = (sequelize, Sequelize) => {
  const QuestionOptions = sequelize.define("question_options", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: Sequelize.STRING
    },
    question_id: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    score: {
      type: Sequelize.INTEGER,
      allowNull: false,
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

  return QuestionOptions;
};