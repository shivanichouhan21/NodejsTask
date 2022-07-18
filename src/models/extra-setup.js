function applyExtraSetup(sequelize) {
    const { imdb_actor, IMDBmovie,IMDB_Movies_genre,imdb_directors,Movies_director,director_genere, imdb_actor_role} = sequelize.models;

    imdb_actor.hasMany(imdb_actor_role, {
        foreignKey : 'actor_id',
        targetKey: 'actor_id'
      });

      imdb_actor_role.belongsTo(imdb_actor, {
        foreignKey : 'actor_id',
        targetKey: 'actor_id'
      });

      IMDBmovie.hasMany(imdb_actor_role, {
        foreignKey : 'movies_id',
        targetKey: 'movie_id'
      });
      
      imdb_actor_role.belongsTo(IMDBmovie, {
        foreignKey : 'movies_id',
        targetKey: 'movie_id'
      });

      IMDB_Movies_genre.belongsTo(IMDBmovie, {
        foreignKey : 'movies_id',
        targetKey: 'movie_id'
      });
      
      imdb_directors.hasMany(Movies_director, {
        foreignKey : 'director_id',
        targetKey: 'id'
      });

      Movies_director.belongsTo(imdb_directors, {
        foreignKey : 'director_id',
        targetKey: 'id'
      });
      imdb_directors.hasMany(director_genere, {
        foreignKey : 'director_id',
        targetKey: 'id'
      });

      director_genere.belongsTo(imdb_directors, {
        foreignKey : 'director_id',
        targetKey: 'id'
      });
}

module.exports = { applyExtraSetup };