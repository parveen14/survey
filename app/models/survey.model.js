module.exports = (sequelize, Sequelize) => {
  const Survey = sequelize.define("survey", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: Sequelize.STRING
    },
    start_date: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    end_date: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    status: {
      type: Sequelize.STRING,
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

  return Survey;
};