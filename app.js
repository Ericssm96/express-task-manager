const express = require('express');
const app = express();
const port = 5000;
const tasks = require('./routes/tasks');

// middleware
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);

app.get('/hello', (req, res)=>{
    res.send("Task manager app")
})

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}.`)
})