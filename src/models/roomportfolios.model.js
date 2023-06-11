const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const RoomDetails = sequelize.define('room_portfolios',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            room_id: {
                type: DataTypes.INTEGER,
            },
            room_pic: {
                type: DataTypes.STRING,
            }

        }, {
        modelName: 'room_portfolios',

    });
    return RoomDetails;
};