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
    it("should return an array", async () => {
      return request(server)
        .get("/games")
        .then(res => {
          expect(res.text).toEqual([]);
        });
      //   const response = await request(server).get("/games");

      //   expect(response.text).toBe([]);
    });
  });
  describe("POST Route", () => {
    beforeEach(async () => {
      await db("games").truncate();
    });
    it("should return status code 201 for POST", async () => {
      const expectedBody = { title: "test1", genre: "test-genre1" };
      const response = await request(server)
        .post("/games")
        .send(expectedBody);

      expect(response.status).toEqual(201);
    });
    it("should return status code 422 for POST(--if genre not provided)", async () => {
      const expectedBody = { title: "test1" };
      const response = await request(server)
        .post("/games")
        .send(expectedBody);

      expect(response.status).toEqual(422);
    });
    it("should return status code 422 for POST(--if title not provided)", async () => {
      const expectedBody = { genre: "test1-genre" };
      const response = await request(server)
        .post("/games")
        .send(expectedBody);

      expect(response.status).toEqual(422);
    });
    it("should return status code 422 for POST(--if genre and title not provided)", async () => {
      const expectedBody = {};
      const response = await request(server)
        .post("/games")
        .send(expectedBody);

      expect(response.status).toEqual(422);
    });
  });
});
