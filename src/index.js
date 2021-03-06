const express = require("express");
const options = require("./options");
const tournamentRouter = require("./tournaments");
const bookRouter = require("./tournaments");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/books", tournamentRouter);

app.all("*", (req, res) => {
    res.status(404).send("URL not found");
});

app.listen(options.port, () => {
    console.log(`http://localhost:${options.port}`);
});