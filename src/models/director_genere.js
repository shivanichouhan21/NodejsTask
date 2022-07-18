module.exports = (sequelize, Sequelize) => {
    const director_generes = sequelize.define("director_genere", {
        director_genre_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
        director_id: {
            type: Sequelize.INTEGER,
            allowNull : false,
            // references: {
            //     model: 'imdb_directors',
            //     key: 'id'
            // }
        },
        genre: {
            type: Sequelize.STRING
          
        },
        prob: {
            type: Sequelize.FLOAT,
            allowNull : false,
        }
    });

    return director_generes;
};