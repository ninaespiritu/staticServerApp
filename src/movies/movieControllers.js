const Movie = require("./movieModel");

exports.addMovie = async (req, res) => {
	try {
		const newMovie = await Movie.create(req.body);
		res.status(200).send({ movie: newMovie });
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message });
	}
};

exports.listMovies = async (req, res) => {
	try {
		const movies = await Movie.find({});
		res.status(200).send({ movies });
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message });
	}
};

exports.deleteMovie = async (req, res) => {
	try {
		const delMovies = await Movie.deleteOne(req.body);
		res.status(200).send({ delMovies });
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message });
	}
};

exports.testRoute = async (req, res) => {
	res.status(200).send({ test: "test route works" });
};
