const express = require("express");
const app = express();
const port = 5001;

app.use("/static", express.static("public"));
app.use("/about", express.static("public/pages/about.html"));
app.use("/portfolio", express.static("public/pages/portfolio.html"));
app.use("/contact", express.static("public/pages/contact.html"));

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});