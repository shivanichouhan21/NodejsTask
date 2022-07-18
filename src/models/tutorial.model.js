const db = require("../models");
const Tutorial = db.tutorials;
const director = db.imdb_director
const Imdb_movies = db.Imdb_movies
const Imdb_actor_movies = db.imdb_actor_role
module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("imdb_actor", {
    actor_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    }
  }
  );
  // Recipe.associate = (models) => {
  //   Recipe.belongsToMany(models.Ingredient, {
  //     through: "RecipeIngredient",
  //     foreignKey: 'recipeId',
  //     as: 'ingredients'
  //   });
  // };
  // Tutorial.associate = (models) => {
  //   Tutorial.hasMany(models.imdb_actor_role , {
  //     foreignKey : 'actor_id',
  //     targetKey: 'actor_id'
  //   });

  // }
  return Tutorial;
};