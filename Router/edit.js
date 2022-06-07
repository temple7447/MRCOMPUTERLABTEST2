const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const Edit = require('../Model/Edit')
// const fs = require("fs");
const MatriculationMorning = require('../Model/MatriculationModelMorning')




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

router.post('/homepagemessagedelete',(req,res)=>{
  Edit.remove({}).then((resp)=>{
    console.log(resp)
    res.send('deleted success')
    
    }).catch((err)=>{
      console.log(err)
    })
})
// home page image
// router.post('/homepageimage',(req,res)=>{
//   const {name,data,mimetype,size} = req.files.homepageimage;
//   console.log(size)
//   res.send('success in image')
//   // const User = new Edit({
//   //   homepagemessage:homepagemessage,
   
//   //   })
//   //   User.save().then((created)=>{
//   //     console.log('it has be created for notification')
//   //     res.send("success")
//   //   })
//   //   .catch((err)=>{
//   //     console.log(err)
//   //   }) 
// })

router.post('/matriculation',(req,res)=>{
  const {matriculation1} = req.body;
  const User = new MatriculationMorning({
    matriculation:matriculation1
  })
  User.save().then((created)=>{
    console.log('it has be created')
    res.send('what you enter was successful')
  })
  .catch((err)=>{
    console.log(err)
  })
})


module.exports = router
