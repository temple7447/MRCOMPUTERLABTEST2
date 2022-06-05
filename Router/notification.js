const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const Notification = require('../Model/Notification')


router.get('/notification',(req,res)=>{
    
    res.render('notification',{layout:'notification'})
})
router.post('/notification',(req,res)=>{
    const {message,morneven,level} = req.body
    const User = new Notification({
        message:message,
        morneven:morneven,
        level:level
      })
      User.save().then((created)=>{
        console.log('it has be created for notification')
        res.send("success")
      })
      .catch((err)=>{
        console.log(err)
      })
    
    
})


module.exports = router
