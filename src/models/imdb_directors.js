module.exports = (sequelize, Sequelize) => {
    const imdb_director = sequelize.define("imdb_directors", {
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      }
    });
  
    return imdb_director;
  };