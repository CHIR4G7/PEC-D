import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 5002;
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");


app.get("/",(request,response)=>
{
    response.sendFile("/Users/chirag/Desktop/PEC D/public/index.html");
})

app.listen(port,()=>
{
    console.log("server working");
})