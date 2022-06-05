const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const Notification = require('../Model/Notification')


router.get('/edit',(req,res)=>{
    
    res.render('edit',{layout:'edit',content:"EDIT PAGE"})
})
router.post('/homepagemessage',(req,res)=>{
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
