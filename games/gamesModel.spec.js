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
    it("should return status code 200(/games)", () => {
      return request(server)
        .get("/games")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
  describe("POST Route", () => {
    it("should return status code 201 for POST", async () => {
      const expectedBody = { title: "test1", genre: "test-genre1" };
      const response = await request(server)
        .post("/games")
        .send(expectedBody);

      expect(response.status).toEqual(201);
    });
  });
});
