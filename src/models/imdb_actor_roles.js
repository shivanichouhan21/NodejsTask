module.exports = (sequelize, Sequelize) => {
    const imdb_actor_role = sequelize.define("imdb_actor_role", {
        actor_role_ids: {
            type: Sequelize.INTEGER,
            primaryKey: true
          },
        actor_id: {
            type: Sequelize.INTEGER,
            allowNull : false,
            references: {
                model: 'actors',
                key: 'actor_id'
            }
        },
        movie_id: {
            type: Sequelize.INTEGER,
            allowNull : false,
            references: {
                model: 'imdb_movies',
                key: 'movies_id'
            }
        },
        role: {
            type: Sequelize.STRING,
            allowNull : false,
        }
    });

    return imdb_actor_role;
};