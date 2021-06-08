const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


app.get("/", async(req,res) =>{
    res.status(200).json({Pika:"chu"});
});

app.listen(4321,()=>{
    console.log('Api Listening on 4321')
});