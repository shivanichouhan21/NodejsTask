function applyExtraSetup(sequelize) {
    const { imdb_actor, imdb_movies, imdb_actor_role} = sequelize.models;

    imdb_actor.hasMany(imdb_actor_role, {
        foreignKey : 'actor_id',
        targetKey: 'actor_id'
      });
      
      imdb_actor_role.belongsTo(imdb_actor, {
        foreignKey : 'actor_id',
        targetKey: 'actor_id'
      });
      
    //   user.hasMany(comment, {
    //     foreignKey : 'userId',
    //     targetKey: 'id'
    //   });
}

module.exports = { applyExtraSetup };