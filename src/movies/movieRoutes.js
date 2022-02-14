const { Router } = require("express");
const { addMovie, listMovies } = require("./movieControllers");
const movieRouter = Router();

// post = create
movieRouter.post("/movie", addMovie);
// get = read
movieRouter.get("/movie", listMovies);

module.exports = movieRouter;