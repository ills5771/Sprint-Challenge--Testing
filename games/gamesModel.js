const db = require("../dbConfig.js");

module.exports = {
  insert,
  all
};

async function insert(game) {
  const [id] = await db("games").insert(game);

  return db("games")
    .where({ id })
    .first();
}

function all() {
  return db("games");
}
