"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Countries", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      fifa: {
        type: Sequelize.STRING,
      },
      flag: {
        type: Sequelize.STRING,
      },
      continent: {
        type: Sequelize.STRING,
      },
      capital: {
        type: Sequelize.STRING,
      },
      sub_region: {
        type: Sequelize.STRING,
      },
      area: {
        type: Sequelize.STRING,
      },
      population: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Countries");
  },
};
