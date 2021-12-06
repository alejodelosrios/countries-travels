"use strict";

const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let countries = [
      {
        id: 1,
        name: "Colombia",
        flag: "https://flagcdn.com/w320/co.png",
        continent: "Americas",
        capital: "Bogotá",
        sub_region: "South America",
        area: 1141748,
        population: 50882884,
      },
      {
        id: 2,
        name: "México",
        flag: "https://flagcdn.com/w320/mx.png",
        continent: "Americas",
        capital: "Mexico City",
        sub_region: "North America",
        area: 1964375,
        population: 128932753,
      },
      {
        id: 3,
        name: "Perú",
        flag: "https://flagcdn.com/w320/pe.png",
        continent: "Americas",
        capital: "Lima",
        sub_region: "South America",
        area: 1285216,
        population: 32971846,
      },
    ];

    await queryInterface.bulkInsert("countries", countries, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("countries", null, {});
  },
};
