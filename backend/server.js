require('dotenv').config();
const express = require('express');
const app = express();
const connectedToDb = require('./db');
const Port = process.env.PORT || 5000;

app.use(express.json());


app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/workouts',require('./routes/workoutRoutes'))


app.get('/', (req, res) => {
    res.send('Hello this side Sksham kaushal');
});

app.listen(Port,() => {
console.log(`Server running at http://localhost:${Port}`);
    
});
