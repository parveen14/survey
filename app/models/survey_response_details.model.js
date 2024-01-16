module.exports = (sequelize, Sequelize) => {
  const SurveyResponseDetails = sequelize.define(
    "survey_response_details",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      survey_response_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      question_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      option_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      text_answer: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: "updated_at",
      },
      created_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      updated_by: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    },
    {
      underscored: true,
    }
  );
  SurveyResponseDetails.associate = function(models) {
    SurveyResponseDetails.belongsTo(models.survey_response, {foreignKey: 'survey_response_id', as: 'survey_response'})
  };
  return SurveyResponseDetails;
};
