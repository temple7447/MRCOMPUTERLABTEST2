const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");


router.get('/notification',(req,res)=>{
    
    res.render('notification',{layout:'notification'})
})
router.post('/notification',(req,res)=>{
    const {message,morneven,level} = req.body
    console.log(message)
    
    
})


module.exports = router
