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
    Imdb_movies.associate = (models) => {
        Imdb_movies.hasMany(models.imdb_actor_role, { as: 'imdb_actor_role', foreignKey: 'movie_id'});

        // Imdb_movies.hasMany(models.Tutorial , {
        //   through: "imdb_actor_role",
        //   foreignKey: 'movie_id',
        //   as: 'actors'
        // });
    }
    return Imdb_movies;
};