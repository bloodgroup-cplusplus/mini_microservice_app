const express = require("express")
const bodyParser = require('body-parser')
const {randomBytes} = require("crypto")
const cors = require('cors')
const axios = require("axios")

const app = express();
app.use(cors())
app.use(bodyParser.json())

// store posts here
const posts = {};


app.get("/posts",(req,res)=>{
    res.send(posts);

});


app.post("/posts", async(req,res)=> {
    const id = randomBytes(4).toString("hex");
    // hadf23232342d2323
    const{title} = req.body 
    posts[id] = {
        id,
        title
    };
    // emit an event to the broker 
    await axios.post("http://localhost:4005/events",{
        type:"PostCreated",
        data:{
            id,
            title
        }
        
    })

    res.status(201).send(posts[id]);

});


app.listen(4000,(req,res)=>{
    console.log("listening on 4000");

});