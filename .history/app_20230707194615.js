import express from "express";

const app = express();
const port = 5002;

app.get("/",(request,response)=>
{
    response.send("hello");
})

app.listen(port,()=>
{
    console.log("server working");
})