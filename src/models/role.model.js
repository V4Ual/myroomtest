const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const Roles = sequelize.define('roles',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            role_name: {
                type: DataTypes.STRING(200),
            },
            status: {
                type: DataTypes.STRING(50),
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
        modelName: 'roles',

    });
    return Roles;
};