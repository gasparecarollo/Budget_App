const express = require("express");
const app = express();
const cors = require("cors");
const transactionsController = require("./controllers/transactionsController.js");

app.use("/transactions", transactionsController);

app.use(cors());
app.use(express.json());


app.get("/", (request, response) => {

    response.send("Welcome to my Budgeting App!");
});





module.exports = app;