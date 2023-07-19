import express from "express";

const app = express();
const port = 5002;

app.get("/",(request,response)=>
{
    response.sendFile("/Users/chirag/Desktop/PEC D/public/index.html");
})

app.listen(port,()=>
{
    console.log("server working");
})