const express = require("express")
const router=express.Router()

router.post("/",(req,res) => {
    
    console.log(req.body)
    if(req.body.name=="devana")
    {
        res.send(req.body)
    }
    else
    {
        res.send("Enter valid name")
    }
})
module.exports=router;