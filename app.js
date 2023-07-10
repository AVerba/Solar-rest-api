const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const codeRouter = require("./src/routes/api/zipcodes");
const companyRouter = require("./src/routes/api/companies");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use('/api/zipcodes', codeRouter);
app.use('/api/companies', companyRouter);

app.use((req, res) => {
    res.status(404).json({message: "Not found"});
});

app.use((err, req, res, next) => {
    const {status = 500, message = "Server error"} = err;
    res.status(status).json({message});
});

module.exports = app;
