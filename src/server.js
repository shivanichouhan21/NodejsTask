const express = require("express");
const app = express();
const db = require("./models");
// const initRoutes = require("./routes/tutorial.routes");
const Movies_routes = require("./routes/imdb_movies");

const {upload,upload_directors,movies_genres,genre_dir,upload_Imdb_movies,upload_movies_actor_role,movies_director} = require("./controllers/tutorials/excel.controller");

global.__basedir = __dirname + "/..";

app.use(express.urlencoded({ extended: true }));
Movies_routes(app);

db.sequelize.sync();

// genre_dir()
// movies_director()
// movies_genres()
// genre_dir()
// upload_movies_actor_role()
// upload_movies_actor_role()
let port = 8000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
