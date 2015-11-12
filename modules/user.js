/**
*   This file is a router for user resource
*   Version 0.1
    Author:
    Description: Created this new file
*/
var query = require('./queries');

var express = require("express");

var router = express.Router();

//This router handles a request to url
//localhost:3000/friends/login
router.post('/login',function(req,res){
    
     query. getFriendsByUsername(req,res);
    query.loginFriend(req,res);
});

//This router handles a request to url
//localhost:3000/friends/register
router.post('/register',function(req,res){
    
    query.registerFriend(req,res);

});


module.exports = router;
