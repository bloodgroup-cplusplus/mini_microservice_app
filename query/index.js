const express = require("express")
const bodyParser = require("body-parser")

const cors = require("cors")

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.get("/posts", (req,res)=>{

});


app.post("/events",(req,res)=>{
    const{type,data} = req.body 
    if(type === "PostCreated")
    {
        const{id,title} = data;
        posts[id] = {id,title,comments:[]};

    }
    if(type == "CommentCreated")
    {
        const{id,content,postId} = data;

    }

});


app.listen(4002,()=>{
    console.log('Server is running on port 4002');
})


