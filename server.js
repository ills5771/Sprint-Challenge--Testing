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

server.post("/games", (req, res) => {
  const newGame = req.body;
  if (newGame.title && newGame.genre) {
    Games.insert(newGame)
      .then(game => {
        res.status(201).json(game);
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error adding game to the database"
        });
      });
  } else {
    res.status(422).json({
      message: "Provide title and genre of the game"
    });
  }
});

module.exports = server;
