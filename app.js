const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require("dotenv").config();
const cors = require('cors');

const employeeRouter = require('./routes/employeeRoute');


// middlewares
app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(express.json())

// for parsing application/json
app.use(bodyParser.json())

require('./connections/mongodb-con');

//Routes
app.use('/api/employee/', employeeRouter)


const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`App running on port: ${port}`);
})