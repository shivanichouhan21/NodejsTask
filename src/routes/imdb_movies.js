const express = require("express");
const router = express.Router();
const excelController = require("../controllers/movies_list");
const upload = require("../middlewares/upload");

let routes = (app) => {
  router.get("/all_movies",excelController.findAllMovies);
  router.get("/movies_by_pagination", excelController.findAllMoviesByPagination);
router.get("/findAlldirector",excelController.findAlldirector)
  router.get("/Actors_list", excelController.Actors_list);

  app.use("/api", router);
};

module.exports = routes;
