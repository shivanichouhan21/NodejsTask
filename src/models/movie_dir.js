module.exports = (sequelize, Sequelize) => {
    const Movie = sequelize.define('imdb_movies', { name: Sequelize.STRING });
    const Actor = sequelize.define('actors', { name: Sequelize.STRING });

    const movies_directors = sequelize.define("Movies_director", {
        movies_director_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        director_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'imdb_directors',
                key: 'id'
            }
        },
        movie_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'imdb_movies',
                key: 'movies_id'
            }
        }
    })
    Movie.belongsToMany(Actor, { through: movies_directors });
    Actor.belongsToMany(Movie, { through: movies_directors });
    // PostBox.associate = function (models) {
    //     PostBox.belongsTo(models.Post, {targetKey: 'id', foreignKey: 'user_posts_id'});
    // };

    return movies_directors;
};