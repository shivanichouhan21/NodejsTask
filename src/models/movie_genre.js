module.exports = (sequelize, Sequelize) => {
    const movies_genre = sequelize.define("Movies_genre", {
        movies_genre_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        movie_id: {
            type: Sequelize.INTEGER,
            allowNull : false,
            references: {
                model: 'imdb_movies',
                key: 'movies_id'
            }
        },
        genre: {
            type: Sequelize.TEXT
          
        }
    });

    return movies_genre;
};