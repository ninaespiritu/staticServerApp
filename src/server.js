require("./db/connection");
const express = require("express");
const movieRouter = require("./movies/movieRoutes");
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());

// "/static" is our route path, "public" is our folder where our static files live
app.use("/static", express.static("public"));
app.use("/about", express.static("public/pages/about.html"));
app.use("/portfolio", express.static("public/pages/portfolio.html"));
app.use("/contact", express.static("public/pages/contact.html"));
app.use(movieRouter);

// run the express application with this function
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});