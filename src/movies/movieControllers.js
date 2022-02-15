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

exports.updateMovie = async (req, res) => {
	try {
		if (req.body.newtitle) {
			const setMovie = await Movie.updateOne(
				{ title: req.body.title },
				{ $set: { title: req.body.newtitle } } 
			);
			res.status(200).send({ setMovie });
		}
		else if (req.body.newactors) {
			const setMovie = await Movie.updateOne(
				{ title: req.body.title },
				{ $set: { actors: req.body.newactors } } 
			);
			res.status(200).send({ setMovie });
		}
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message });
	}
};

exports.deleteMovie = async (req, res) => {
	try {
		const delMovie = await Movie.deleteOne(req.body);
		res.status(200).send({ delMovie });
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: error.message });
	}
};

exports.testRoute = async (req, res) => {
	res.status(200).send({ test: "test route works" });
};
