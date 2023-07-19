import express from "express";
import res from "express/lib/response";

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