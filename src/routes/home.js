/* This code snippet is setting up a basic route in a Node.js application using the Express framework.
Here's a breakdown of what each part does: */
const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("home page")
})

module.exports=router