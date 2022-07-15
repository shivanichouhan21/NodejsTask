module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("actors", {
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
  });

  return Tutorial;
};