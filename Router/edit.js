const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const Edit = require('../Model/Edit')


router.get('/edit',(req,res)=>{
    
    res.render('edit',{layout:'edit',content:"EDIT PAGE"})
})
router.post('/homepagemessage',(req,res)=>{
  const {homepagemessage} = req.body
  const User = new Edit({
    homepagemessage:homepagemessage,
   
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
