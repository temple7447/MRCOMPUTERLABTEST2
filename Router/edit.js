const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const Edit = require('../Model/Edit')
const fs = require("fs");
const MatriculationMorning = require('../Model/MatriculationModelMorning')
const General = require('../Model/MorningHnd2Model')
const multer  = require('multer');
const EditImage = require('../Model/Image')


const MorningHnd1Models = require('../Model/HND1')
const MorningHnd2Models = require('../Model/HND2')


const Morningnd1Models = require('../Model/ND1')
const Morningnd2Models = require('../Model/ND2')

const EveningHnd2Models = require('../Model/HND22')
const EveningHnd1Models = require('../Model/HND11')

const Eveningnd2Models = require('../Model/ND22')
const Eveningnd1Models = require('../Model/ND11')





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
      res.redirect('/admin')
    })
    .catch((err)=>{
      console.log(err)
    }) 
})

router.post('/homepagemessagedelete',(req,res)=>{
  Edit.remove({}).then((resp)=>{
    console.log(resp)
    res.redirect('/admin/edit')
    
    }).catch((err)=>{
      console.log(err)
    })
})



// home page image
router.post('/homepageimage',(req,res)=>{
  console.log(req.files)
  try {
    if(!req.files){
      res.send('please enter an image')
    }else{
      const {name,data,mimetype,size} = req.files.homepageimage;
      const avater = req.files.homepageimage
      avater.mv('./upload/'+ name)
      const NewImage = new EditImage({
        name:name,
        desc:"my first photo",
        size:size,
        ima:{
          data:data,
          contentType:mimetype
        }
      })
      NewImage.save({}).then((message)=>{
        console.log(message)
        res.send('image sucess')

      })
      .catch((err)=>{
        console.log(err)
      })
      
    }
  } catch (err) {
    console.log(err)
  }

})



router.post('/matriculation',(req,res)=>{
  const {matriculation1} = req.body;
  const User = new MatriculationMorning({
    matriculation:matriculation1
  })
  User.save().then((created)=>{
    console.log('it has be created')
    res.redirect('/admin/edit')
  })
  .catch((err)=>{
    console.log(err)
  })
})


router.post('/delete',(req,res)=>{
 const {matriculation} = req.body;
 General.deleteOne({matriculation:matriculation}).then(()=>{
   res.redirect('/admin')
 }).catch((err)=>{
   console.log(err)
 })
 MorningHnd2Models.deleteOne({matriculation:matriculation}).then((resp)=>{
   console.log(resp)
 }).catch((err)=>{
   console.log(err)
 })
 MorningHnd1Models.deleteOne({matriculation:matriculation}).then((resp)=>{
   console.log(resp)
 }).catch((err)=>{
   console.log(err)
 })
 Morningnd2Models.deleteOne({matriculation:matriculation}).then((resp)=>{
   console.log(resp)
 }).catch((err)=>{
   console.log(err)
 })
 Morningnd1Models.deleteOne({matriculation:matriculation}).then((resp)=>{
   console.log(resp)
 }).catch((err)=>{
   console.log(err)
 })


 EveningHnd2Models.deleteOne({matriculation:matriculation}).then((resp)=>{
   console.log(resp)
 }).catch((err)=>{
   console.log(err)
 })
 EveningHnd1Models.deleteOne({matriculation:matriculation}).then((resp)=>{
   console.log(resp)
 }).catch((err)=>{
   console.log(err)
 })
 Eveningnd2Models.deleteOne({matriculation:matriculation}).then((resp)=>{
   console.log(resp)
 }).catch((err)=>{
   console.log(err)
 })
 Eveningnd1Models.deleteOne({matriculation:matriculation}).then((resp)=>{
   console.log(resp)
 }).catch((err)=>{
   console.log(err)
 })


})

router.post('/homeimagedelete',(req,res)=>{
  EditImage.deleteOne({}).then((resp)=>{
    console.log(resp)
    res.redirect('/admin/edit')
    
    }).catch((err)=>{
      console.log(err)
    })
})


module.exports = router
