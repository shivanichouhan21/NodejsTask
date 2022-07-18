const db = require("../models");
const Tutorial = db.tutorials;
const director = db.imdb_director
const Imdb_movies = db.Imdb_movies
const Imdb_actor_movies = db.imdb_actor_role
const Director_genere = db.director_generes
const movies_directors = db.movies_directors
const movie_genre = db.movies_genre
module.exports = (sequelize, Sequelize) => {
    const imdb_actor_role = sequelize.define("imdb_actor_role", {
        actor_role_ids: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        actor_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            // references: {
            //     model: 'actors',
            //     key: 'actor_id'
            // }
        },
        movie_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            // references: {
            //     model: 'imdb_movies',
            //     key: 'movies_id'
            // }
        },
        role: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });



    // imdb_actor_role.associate = (models) => {

    //     imdb_actor_role.belongsTo(models.Tutorial, {
    //         // as: 'imdb_movies',
    //         foreignKey: 'actor_id',
    //         targetKey: 'actor_id'

    //     });
        // imdb_actor_role.belongsTo(Tutorial, {
        //     as: 'actors',
        //     foreignKey: 'actor_id'
        // });
    // };
    return imdb_actor_role;
};