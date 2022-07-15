module.exports = (sequelize, Sequelize) => {
    const Imdb_movies = sequelize.define("imdb_movies", {
        movies_id: {
            type: Sequelize.INTEGER,
            primaryKey: true
          },
          name: {
            type: Sequelize.STRING
        },
        year: {
            type: Sequelize.STRING
        },
        rank: {
            type: Sequelize.DECIMAL(11, 10)
        }
    });

    return Imdb_movies;
};