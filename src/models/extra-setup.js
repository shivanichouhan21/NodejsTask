function applyExtraSetup(sequelize) {
    const { imdb_actor, IMDBmovie,IMDB_Movies_genre, imdb_actor_role} = sequelize.models;

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
      
    //   user.hasMany(comment, {
    //     foreignKey : 'userId',
    //     targetKey: 'id'
    //   });
}

module.exports = { applyExtraSetup };