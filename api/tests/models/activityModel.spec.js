const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require("sequelize-test-helpers");

const Activity = require("../../db/models/activity");

describe("db/models/activity", () => {
  const Model = Activity(sequelize, dataTypes);
  const activity = new Model();
  checkModelName(Model)("Activity");
  context("properties", () => {
    ["name", "difficulty", "duration", "season"].forEach(
      checkPropertyExists(activity)
    );
  });
});
