const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const Edit = require('../Model/Edit')
const fs = require("fs");

router.get('/edit',(req,res)=>{
    
    res.render('edit',{layout:'edit',content:"EDIT PAGE"})
})
// home page message
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
// home page image
router.post('/homepageimage',(req,res)=>{
  const {homepageimage} = req.files;
  console.log(homepageimage)
  res.send('success in image')
  // const User = new Edit({
  //   homepagemessage:homepagemessage,
   
  //   })
  //   User.save().then((created)=>{
  //     console.log('it has be created for notification')
  //     res.send("success")
  //   })
  //   .catch((err)=>{
  //     console.log(err)
  //   }) 
})


module.exports = router
