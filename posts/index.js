const express = require("express")
const bodyParser = require('body-parser')
const {randomBytes} = require("crypto")

const app = express();
app.use(bodyParser.json())

// store posts here
const posts = {};


app.get("/posts",(req,res)=>{
    res.send(posts);

});


app.post("/posts", (req,res)=> {
    const id = randomBytes(4).toString("hex");
    // hadf23232342d2323
    const{title} = req.body 
    posts[id] = {
        id,
        titile
    };

    res.status(201).send(posts[id]);

});


app.listen(4000,()=>{
    console.log("listening on 4000");
});