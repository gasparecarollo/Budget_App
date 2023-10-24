const express = require("express");
const app = express();
const cors = require("cors");
const transactionControllers = require("./controllers/transactionsController");

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {

    response.send("Welcome to my Budgeting App!")
});





module.exports = app;