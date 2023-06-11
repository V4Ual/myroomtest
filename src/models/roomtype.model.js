const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const RoomTypes = sequelize.define('room_types',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            room_type_name: {
                type: DataTypes.STRING(200),
            },
            image: {
                type: DataTypes.STRING
            },
            order: {
                type: DataTypes.INTEGER
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
        modelName: 'room_types',

    });
    return RoomTypes;
};