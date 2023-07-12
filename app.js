const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require("dotenv").config();
require('./config/passport_setup');
const db = require('./config/mongoose');

const passport = require('passport');
const app = express();
const port = 5002;
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views","./views");
const session = require('express-session');
// const cookieSession = require('cookie-session');

// Authentication configuration
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'bla bla bla' 
  }));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname,"public")))

// use express router
app.use('/', require('./routes'));

app.listen(port,()=>
{
    console.log(`server working on port : ${port}`);
})
