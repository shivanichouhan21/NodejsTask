module.exports = (sequelize, Sequelize) => {
    const movies_genre = sequelize.define("IMDB_Movies_genre", {
        movies_genre_id: {
            type: Sequelize.INTEGER,
            // autoIncrement: true,
            primaryKey: true
          },
        movies_id: {
            type: Sequelize.INTEGER,
            allowNull : false,
            // references: {
            //     model: 'imdb_movies',
            //     key: 'movies_id'
            // }
        },
        genre: {
            type: Sequelize.TEXT
          
        }
    });

    return movies_genre;
};