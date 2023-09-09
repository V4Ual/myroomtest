"use strict";
module.exports = {
  up: async function (queryInterface, DataTypes) {
    await queryInterface.createTable("cities", {
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

    })

  },
  down: async function (queryInterface, DataTypes) {
    await queryInterface.dropTable("cities")
  },
};
