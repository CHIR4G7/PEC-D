import express from "express";

const app = express();
const port = 5002;

app.get("/",(request,response)=>
{
    response.sendFile("")
})

app.listen(port,()=>
{
    console.log("server working");
})