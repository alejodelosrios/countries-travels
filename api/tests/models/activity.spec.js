/* eslint-disable import/no-extraneous-dependencies */
const assert = require("assert");
const request = require("supertest");
const app = require("../../server");
const { Activity } = require("../../db/models");
const { sequelize } = require("../../db/models/index.js");

const activity = {
  difficulty: 3,
  duration: 1,
  season: ["Winter", "Summer"],
  countriesId: ["1", "2"],
};
const activityWithName = {
  name: "Actividad de prueba desde el test",
  difficulty: 3,
  duration: 1,
  season: ["Winter", "Summer"],
  countriesId: ["1", "2"],
};

describe("Activity Model", () => {
  before(() =>
    sequelize.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Create an activity", () => {
    it("should get an error if the name is undefined", () => {
      Activity.create(activity)
        .then(() => done(new Error("It requires a valid name")))
        .catch(() => done());
    });
    it("should work when you send a valid object with name included", () => {
      Activity.create(activityWithName);
    });
  });
});
