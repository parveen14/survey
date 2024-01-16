module.exports = (sequelize, Sequelize) => {
  const Survey = sequelize.define(
    "survey",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tenant_id: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      start_date: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      end_date: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.STRING,
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
  Survey.associate = function(models) {
    Survey.hasMany(models.questions, {as: 'questions'})
    Survey.hasMany(models.survey_response, {as: 'survey_response'})
  };
  return Survey;
};
