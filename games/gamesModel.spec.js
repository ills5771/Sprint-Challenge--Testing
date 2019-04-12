const request = require("supertest");
const server = require("../server.js");
const Games = require("./gamesModel");
const db = require("../dbConfig.js");

describe("gamesModel.js", () => {
  describe("GET Route", () => {
    it("should return status code 200(/)", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
