const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const RoomDetails = sequelize.define('room_details',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
              },
              user_id: {
                type: DataTypes.INTEGER,
              },
              room_type_id: {
                type: DataTypes.INTEGER,
              },
              room_cover_image: {
                type: DataTypes.STRING(1000),
              },
              address_1: {
                type: DataTypes.STRING(100),
              },
              address_2: {
                type: DataTypes.STRING(100),
              },
              bethroom: {
                type: DataTypes.INTEGER,
              },
              room: {
                type: DataTypes.INTEGER
              },
              about: {
                type: DataTypes.TEXT
              },
              monthly_amount: {
                type: DataTypes.INTEGER
              },
              deposite_amount: {
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
        modelName: 'room_details',

    });
    return RoomDetails;
};