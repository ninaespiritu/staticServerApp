const { Router } = require("express");
const {
	addMovie,
	listMovies,
	updateMovie,
	deleteMovie,
	testRoute,
} = require("./movieControllers");
const movieRouter = Router();

// post = create
movieRouter.post("/movie", addMovie);
// get = read
movieRouter.get("/movie", listMovies);
// update
movieRouter.put("/movie", updateMovie);
// delete
movieRouter.delete("/movie", deleteMovie);

// test
movieRouter.get("/test", testRoute);

module.exports = movieRouter;
