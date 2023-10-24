const express = require("express");
const transactionsRouter = express.Router();
const transactionsArray = require("../models/data");
const { response } = require("../app");

transactionsRouter.get("/", (request, response, next) => {

    try {
        if (transactionsArray && transactionsArray.length > 0) {

            response.status(200).send(transactionsArray);
        } else {
            response.status(404).send("No transaction is available.");

        }

    }

    catch (error) {
        next(error);
    }
});

transactionsRouter.get("/:id", (request, response, next) => {

    const id = request.params.id;

    try {
        if (transactionsArray) {
            response.status(201).send("There is a transaction with the following ID.");

        } else {
            response.status(404).send(transactionsArray);
        }
    }
    catch (error) {
        next(error)
    }


});

transactionsRouter.post("/transactions", (request, response, next) => {
    const { id } = req.body;
    const { item_name } = req.body;
    const { amount } = req.body;
    const { date } = req.body;
    const { from } = req.body;

    transactionsArray.push({ id, item_name, amount, date, from });

    response.status(201).send({ message: "You have successfully added a new budget item" })

    next();
});

transactionsRouter.delete("/transactions/:id", (request, response, next) => {
    try {
        const id = parseInt(request.params.id)
        const itemIndex = transactionArray.findIndex(item => item.id === id);

        if (itemIndex === -1) {

            return
            response.status(404).send({ message: "Item with that ID can not be found." })
        }
        const deletedItem = transactionArray.splice(itemIndex, 1);

        response.send(deletedItem[0]);
    } catch (error) {
        next(error);
    }
});

//UPDATE 'PUT' and /transactions/:id	

module.exports = transactionsRouter;