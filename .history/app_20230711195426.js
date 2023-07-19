const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require("dotenv").config();

const passport = require('passport');
const session = require('express-session');
const cookieSession = require('cookie-session');
const ejs = require('ejs');
const { nextTick } = require('process');

const app = express();
const port = 5500;


// app.set("views","./views");
app.set('views', path.join(__dirname, './views'));



app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

// Authentication configuration
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'bla bla bla' 
  }));

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport_setup');


app.get("/",(request,response)=>
{
    if(request.user){
        response.render("index",{user_name : request.user.displayName});
    }else{
        response.render("index.ejs");
    }
    
})

app.get("/auth",(req,res)=>{
    res.render("authentication.ejs");
})

app.get("/auth/google",passport.authenticate('google' ,{scope: ['profile','email']} ))

app.get("/auth/google/callback",passport.authenticate('google' , {failureRedirect: '/failed'}),(req,res)=>{
    res.redirect('/');
})

app.get('/logout',(req,res)=>{
    res.session = null;
    req.logout(function(err){
        if(err){
            return next(err);
        }
        return res.redirect('/');
    });
})

// app.get('/success',(req,res)=>{
//     res.render(`index.ejs`,{user_name : req.user.displayName});
// })

app.listen(port,()=>
{
    console.log(`server working on port : ${port}`);
})
