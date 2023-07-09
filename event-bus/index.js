const express = require("express")
const bodyParser = require("body-parser");

const axios = require("axios");

const app= express();

// assocation with middleware 

app.use(bodyParser.json())

app.post("/events", (req,res)=>{
    const event = req.body
    axios.post("http://localhost:400/events",event);
    axios.post("http://localhost:4001/events",event);
    axios.post("http://localhost:4002/events",event);



})
