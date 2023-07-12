const express = require('express');
const router = express.Router();
const passport = require('passport');
require('../config/passport_setup');

console.log("router loaded !!");

router.get("/",(request,response)=>
{
    if(request.user){
        response.render("index.ejs",{user_name : request.user.displayName});
    }else{
        response.render("index.ejs");
    }
})

router.get("/auth",(req,res)=>{
    res.render("authentication.ejs");
})

router.get("/auth/google",passport.authenticate('google' ,{scope: ['profile','email']} ))

router.get("/auth/google/callback",passport.authenticate('google' , {failureRedirect: '/failed'}),(req,res)=>{
    res.redirect('/');
})

router.get('/logout',(req,res)=>{
    res.session = null;
    req.logout(function(err){
        if(err){
            return next(err);
        }
        return res.redirect('/');
    });
})

// router.get('/success',(req,res)=>{
//     res.render(`index.ejs`,{user_name : req.user.displayName});
// })


module.exports = router;
