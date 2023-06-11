"use strict";
module.exports = {
  up: async function (queryInterface, DataTypes) {
    await queryInterface.createTable("room_portfolios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      room_id: {
        type: DataTypes.INTEGER,
      },
      room_pic:{
        type: DataTypes.STRING,
      }

    })

  },
  down: async function (queryInterface, DataTypes) {
    await queryInterface.dropTable("room_portfolios")
  },
};
