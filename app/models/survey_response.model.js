module.exports = (sequelize, Sequelize) => {
  const SurveyResponse = sequelize.define(
    "survey_response",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      designation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      survey_id: {
        allowNull: false,
        type: Sequelize.STRING,
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
  SurveyResponse.associate = function(models) {
    SurveyResponse.belongsTo(models.survey, {foreignKey: 'survey_id', as: 'survey'})
  };
  return SurveyResponse;
};
