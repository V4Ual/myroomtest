"use strict";
module.exports = {
  up: async function (queryInterface, DataTypes) {
    await queryInterface.createTable("countries", {
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

    })

  },
  down: async function (queryInterface, DataTypes) {
    await queryInterface.dropTable("countries")
  },
};
