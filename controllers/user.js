const { errorHandler } = require("../helper/dbErrorHandler")
const User=require("../model/user")
const jwt= require('jsonwebtoken')// to generate signed token
const expressJwt=require('express-jwt') //for authorization check
const user = require("../model/user")


exports.signup=(req,res)=>{
    console.log(req.body)
    const user= new User(req.body)
    user.save((err,user)=>{
        if(err){
            return res.status(400).json({
                err:errorHandler(err)
            })
        }
        user.salt= undefined;
        user.hashed_password=undefined;
         res.json({
           message:user
        })
    })
    
}

exports.signin= (req,res)=>{
// find the user based on email
const {email,password}= req.body
user.findOne({email},(err,user)=>{
if(err||!user){
    return res.status(400).json({
        err:'User not fount in email does not exit.Please Signup'
    })
}
//if user is found make sure the email and password match
// create authenticate method in user model
if(!user.authenticate(password)){
    return res.status(401).json({
        error:'Email and passoword dont match'
    });
}

//generate a signed token with user id and secret
const token= jwt.sign({_id:user._id},process.env.JWT_SECRET)
//PERSIST THE TOKEN AS 'T' IN COOKIE WITH EXPIRY DATE

res.cookie('t',token,{expire:new Date()+9999})
// return response with user and token to frontend client
const{_id,name,email,role}=user
return res.json({token,user:{_id,email,name,role}})
})
}