const express = require("express");

const Games = require("./games/gamesModel");

const server = express();

server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).send("Games Api is up and running!");
});

server.get("/games", async (req, res) => {
  const games = await Games.all();

  res.status(200).json(games);
});

module.exports = server;
