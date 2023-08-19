const { DataTypes } = require('sequelize');
const CLOUDNAIRY_IMAGE_ROOMPORTFOLIO = process.env.CLOUDNAIRY_IMAGE_ROOMPORTFOLIO
console.log({ CLOUDNAIRY_IMAGE_ROOMPORTFOLIO });
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
                get: function () {
                    return CLOUDNAIRY_IMAGE_ROOMPORTFOLIO + this.getDataValue('room_pic')
                }
            }

        }, {
        modelName: 'room_portfolios',

    });
    return RoomDetails;
};