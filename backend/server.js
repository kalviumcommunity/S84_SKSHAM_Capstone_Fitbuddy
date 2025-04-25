const express = require('express');
require('dotenv').config();
const app = express();
const connectedToDb = require('./db');
const Port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello this sksham kaushal');
});

app.listen(Port,() => {

console.log(`Port is listening at http://localhost:${Port}`);
    
});
