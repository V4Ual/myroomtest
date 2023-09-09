const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const Roles = sequelize.define('countries',
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
              country_code: {
                type: DataTypes.STRING,
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
        modelName: 'countries',

    });
    return Roles;
};