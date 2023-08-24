"use strict";
module.exports = {
  up: async function (queryInterface, DataTypes) {
    await queryInterface.createTable("otps", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      otp: {
        type: DataTypes.STRING(200),
      },

      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: true
      },
      time: {
        allowNull: false,
        type: DataTypes.DATE
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },

    })

  },
  down: async function (queryInterface, DataTypes) {
    await queryInterface.dropTable("otps")
  },
};
