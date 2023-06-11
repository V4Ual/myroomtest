const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('users',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            full_name: {
                type: DataTypes.STRING(200),
            },
            email: {
                type: DataTypes.STRING(50),
            },
            phone_number: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.STRING,
            },
            role_id: {
                type: DataTypes.STRING(100),
            },
            latitudes: {
                type: DataTypes.DECIMAL(8, 6),
            },
            longitudes: {
                type: DataTypes.DECIMAL(9, 6),
            },

        }, {
        modelName: 'users',

    });
    return User;
};