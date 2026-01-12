/* This code snippet is setting up a router using the Express framework in Node.js. Here's a breakdown
of what each part does: */
const express = require("express")
const router=express.Router()

/* This code snippet is defining a POST route for the "/login" endpoint on the router object. When a
POST request is made to the "/login" endpoint, the callback function `(req, res) => { ... }` will be
executed. */
router.post("/login",(req,res) => {
    console.log(req.body)
    res.send("Login pageeeee")
})
router.post("/register",(req,res) => {
    console.log(req.body)
    res.send("Register page")
})
module.exports=router