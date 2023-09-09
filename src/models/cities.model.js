const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  const Roles = sequelize.define('cities',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state_id: {
        type: DataTypes.INTEGER,
      },
      country_id: {
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },

    }, {
    modelName: 'cities',

  });
  return Roles;
};