require("dotenv").config();
const connectDB = require('./db/connect')
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const tasks = require('./routes/tasks');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

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