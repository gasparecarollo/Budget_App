#budget_App_Backend

git init -y
npm install
install dotenv
touch .gitignore
type PORT=3333
touch app.js
touch server.js
mkdir Controllers
mkdir Models

In server.js,

http request (frontend, fetch(http:3001))
-> app.js (figures out where to route)
-> controller (handling the logic for response)
const app = require('./app');
const port = process.env.PORT || 3333

app.get('/', (req, res) => {
    res.send("Welcome to Budgeter App")
})

app.listen(port, () ={
    console.log(`Listening on port ${port}`)
})


In app.js,

const express = require('express);
const app = express();
(module.exports=app;)
const cors = require('cors);
const transactionsControllers = require('./controllers/transactionsController.js');

app.use(cors()); (npm install cors as well)

app.use(express.json());

app.use('/transactions', transactionsControllers);
----

npm install -g nodemon

Scripts in package.json
"start": " nodemon server.js"

Cross Origin Resource Sharing

inside controllers folder, touch transactionsController.js 

inside transactionsController.js

const express = require('express');

const transactionRouter = express.Router();
const transactionArray = require('..//models/data');
transactionRouter.use(express.json());

//Get transactions

transactionRouter.get("/", (req, res, next) => {
    try{
if(transactionArray && transactionArray.length > 0) {
    res.send(transactionArray)
}
    } else {
        res.status(404).send({message: "Transactions were not found"}))
    }
}
    catch(error) {
next(error)

})
//Read Transactions (Show)
transactionRouter.get("/:id", (req, res, next) => {
try {
const id = req.params.id;
const transaction = transactionArray.find(item => item.id === parseInt(id)) 

//Or const {id} = req.params => {id:"1122"}
if(transaction){
    res.status(200).send(transaction);
} else {
    res.status(404).send({message: "Could not find transaction"})
}

catch(error) {
next(error)
}
}
})

//CREATE POST

transactionRouter.post("/", (req, res, next) => {
try {
const transactionBody = req.body;
if (transactionBody) {
    transactionArray.push(transactionBody) 
    res.status(200).send(transactionBody)
} else { 
    res.status(404).send({message: "Transaction was not created"})

}
}
catch(error) {

next(error)
}
})


touch controllers/transactionsController.test.js

copy and paste test



In models folder, touch data.js
module.exports = [
    {id: 1122, 
    item_name: "income",
    amount: 1000,
    date: 10-23-2023,
    from: "employer
    },

    {id: 1133, 
    item_name: "income",
    amount: 1000,
    date: 10-23-2023,
    from: "employer
    },
    ]

