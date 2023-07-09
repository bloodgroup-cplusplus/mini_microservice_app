const express = require("express")
const bodyParser=require("body-parser")
const{randomBytes} = require("crypto")
const cors = require("cors")
const axios = require("axios");



const app = express()
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId={};

app.get("/posts/:id/comments",(req,res)=>{

    res.send(commentsByPostId[req.params.id] || []);
});


app.post("/posts/:id/comments",(req,res)=>{
    // in memory data structure
    const commentId= randomBytes(4).toString("hex");
    // we will pull out the content property 

    const {content} = req.body

    const comments= commentsByPostId[req.params.id] || [];
    // if we never have a comment we have c

    comments.push({id:commentId,content});

    commentsByPostId[req.params.id] = comments;

    axios.post("http://localhost:4005/events",{
        type:"CommentCreated",
        data:{
            id:commentId,
            content,


        }



    })

    // send back entire array of comments
    res.status(201).send(comments);

})



app.listen(4001,()=>{
    console.log("listening on port 4001")
})