var cors = require('cors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const express = require('express');

const app = express();

const transactions = require('./modules/transactions')
const accounts = require('./modules/accounts')


let connectionString = "mongodb://localhost:27017/blockchain-explorer";;
mongoose.connect(connectionString);

//connection to mongoose
mongoose
 .connect(connectionString, { useNewUrlParser: true } )
 .then( () => { console.log("Mongoose connected successfully to Mongo DB"); },
   error => { console.log("Mongoose could not connected to database: " + error); }
 );

 app.use(cors());


app.get('/account/addresses', (req, res) => {
    var list = accounts.getAddresses();
    
    res.send(list);
    console.log('Sent list of items');
});

app.get('/account/balance', (req, res) => {
     var account = req.query.accounts;
     var balance = accounts.getBalance(account);
     res.send(balance);
     
});

app.get('/transaction/history', (req, res) => {
     transactions.find((error, document) => {
      if(error) console.log(error)
      else{
        const data = document;
        res.send(data);
      }
     })
});
 
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));