/* eslint-disable import/no-extraneous-dependencies */
const assert = require("assert");
const request = require("supertest");
const app = require("../../server");

describe("Countries route", () => {
  describe("GET countries", () => {
    it("should get 200", async () => {
      const response = await request(app).get("/api/v1/countries");
      assert.equal(response.status, 200);
    });
  });
});
