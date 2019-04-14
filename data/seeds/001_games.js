exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("games")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("games").insert([
        { title: "Pacman", genre: "Arcade", year: 1980 },
        { title: "NBA Jams", genre: "Arcade", year: 1991 },
        { title: "Mario Bros", genre: "Console", year: 1985 }
      ]);
    });
};
