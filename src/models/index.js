const dbConfig = require("../config/db.config.js");
const { applyExtraSetup } = require('./extra-setup');

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.imdb_director = require("./imdb_directors")(sequelize, Sequelize);
db.Imdb_movies = require("./imdb_movies")(sequelize, Sequelize);
db.imdb_actor_role = require("./imdb_actor_roles")(sequelize,Sequelize)
db.director_generes = require("./director_genere")(sequelize,Sequelize)
db.movies_directors = require("./movie_dir")(sequelize,Sequelize);
db.movies_genre = require("./movie_genre")(sequelize,Sequelize)
applyExtraSetup(sequelize);

module.exports = db;