const express = require("express")
const bodyParser=require("body-parser")
const{randomBytes} = require("crypto")



const app = express()
app.use(bodyParser.json());

const commentsByPostId={};

app.get("/posts/:id/comments",(req,res)=>{

    res.send(commentsByPostId[req.params.id] || []);
});


app.post("/posts/:id/comments",(req,res)=>{
    // in memory data structure
    const commentId= randomBytes(4).toString("hex");
    // we will pull out the content property 

    const {content} = req.body

    const comments= commentdByPostId[req.params.id] || [];
    // if we never have a comment we have c

    comments.push({id:commentId,content});

    commentsByPostId[req.params.id] = comments;

    // send back entire array of comments
    res.status(201).send(comments);

})



app.listen(4001,()=>{
    console.log("listening on port 4001")
})