const connectDB = require('./db/connect')
const express = require('express');
const app = express();
const port = 5000;
const tasks = require('./routes/tasks');
require("dotenv").config();

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, ()=>{
            console.log(`Server listening on port ${port}.`)
        })
    } catch (err) {
        console.log("Couldn't connect to database.")
    }
}

start();