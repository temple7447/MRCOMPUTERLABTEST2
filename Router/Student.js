const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const multer = require("multer");
const upload = multer({ dest: 'uploads/' })
const connection = require('../config/sql')
const MatriculationMorning = require('../Model/MatriculationModelMorning')
const MatriculationEvening = require('../Model/MatriculationModelEvening')
const General = require('../Model/MorningHnd2Model')
const EditImage = require('../Model/Image');

const MorningHnd1Models = require('../Model/HND1')
const MorningHnd2Models = require('../Model/HND2')


const Morningnd1Models = require('../Model/ND1')
const Morningnd2Models = require('../Model/ND2')

const EveningHnd2Models = require('../Model/HND22')
const EveningHnd1Models = require('../Model/HND11')

const Eveningnd2Models = require('../Model/ND22')
const Eveningnd1Models = require('../Model/ND11')










router.post('/student',(req, res)=> {
  const {fullname,matriculation,level,morneven} = req.body;
  const {name,data,mimetype,size} = req.files.avater;
      const avater = req.files.avater

      console.log(mimetype)

     try {
      if(mimetype == 'application/pdf'){

      
        if(!req.files){
          // res.redirect('/assignment',{message:"you have to input your file"})
          res.send('you have to input your image')
        }else{

      avater.mv('./files/'+ name)
      

  if(!fullname && !matriculation && !morneven && !level){
    
res.status(401).send('you need to fill all the form,the information you enter is not completed')

  }
  else{
    if(morneven == "MORNING"){
      MatriculationMorning.findOne({matriculation:matriculation}).then((user)=>{
        if(!user){
          console.log('your name is not on the list')
        res.redirect('/assignment')
        }else{
         if(level == "HND2"){
// start1
          const UserM = new General({
            fullname:fullname,
            matriculation:matriculation,
            morneven:morneven,
            level:level,
            name:name,
            desc:"my first photo",
            size:size,
            files:{
              data:data,
              contentType:mimetype
            }
          })
          const User = new MorningHnd2Models({
            fullname:fullname,
            matriculation:matriculation,
            morneven:morneven,
            level:level,
            name:name,
            desc:"my first photo",
            size:size,
            files:{
              data:data,
              contentType:mimetype
            }
          })
          UserM.save().then(()=>{
            console.log('it has be created')
          })
          .catch((err)=>{
            console.log(err)
          })
          User.save().then(()=>{
            console.log('it has be created')
          }).then(()=>{
            res.redirect('/')
          })
          .catch((err)=>{
            console.log(err)
            res.redirect('/assignment')
          })
// end1

         }else if(level=="HND1"){
          const UserM = new General({
            fullname:fullname,
            matriculation:matriculation,
            morneven:morneven,
            level:level,
            name:name,
            desc:"my first photo",
            size:size,
            files:{
              data:data,
              contentType:mimetype
            }
          })
          const User = new MorningHnd1Models({
            fullname:fullname,
            matriculation:matriculation,
            morneven:morneven,
            level:level,
            name:name,
            desc:"my first photo",
            size:size,
            files:{
              data:data,
              contentType:mimetype
            }
          })
          UserM.save().then(()=>{
            console.log('it has be created')
            res.redirect('/')
          })
          .catch((err)=>{
            console.log(err)
          })
          User.save().then(()=>{
            console.log('it has be created')
          })
          .catch((err)=>{
            console.log(err)
            res.redirect('/assignment')
          })

         }else if(level == "ND2"){
          const UserM = new General({
            fullname:fullname,
            matriculation:matriculation,
            morneven:morneven,
            level:level,
            name:name,
            desc:"my first photo",
            size:size,
            files:{
              data:data,
              contentType:mimetype
            }
          })
          const User = new Morningnd2Models({
            fullname:fullname,
            matriculation:matriculation,
            morneven:morneven,
            level:level,
            name:name,
            desc:"my first photo",
            size:size,
            files:{
              data:data,
              contentType:mimetype
            }
          })
          UserM.save().then((created)=>{
            console.log('it has be created from general')
          })
          .catch((err)=>{
            console.log(err)
          })
          User.save().then((created)=>{
            console.log('it has be created from nd2')
            res.redirect('/')
          })
          .catch((err)=>{
            console.log(err)
            res.redirect('/assignment')
          })
         }else if(level == "ND1"){
          const UserM = new General({
            fullname:fullname,
            matriculation:matriculation,
            morneven:morneven,
            level:level,
            name:name,
            desc:"my first photo",
            size:size,
            files:{
              data:data,
              contentType:mimetype
            }
          })
          const User = new Morningnd1Models({
            fullname:fullname,
            matriculation:matriculation,
            morneven:morneven,
            level:level,
            name:name,
            desc:"my first photo",
            size:size,
            files:{
              data:data,
              contentType:mimetype
            }
          })
          UserM.save().then((created)=>{
            console.log('it has be created')
            res.redirect('/')
          })
          .catch((err)=>{
            console.log(err)
            res.redirect('/assignment')
          })
          User.save().then((created)=>{
            console.log('it has be created')
          })
          .catch((err)=>{
            console.log(err)
          })
         }
        // END OF MORNING
        }
        })
        }
 else if(morneven == "EVENING"){
  MatriculationEvening.findOne({matriculation:matriculation}).then((user)=>{
    if(!user){
      console.log('your name is not on the list')
    res.send('your name is not on the list of auchi polytechnic for evening student')
    }else{
     if(level == "HND2"){
// start1
      const UserM = new General({
        fullname:fullname,
        matriculation:matriculation,
        morneven:morneven,
        level:level,
        name:name,
        desc:"my first photo",
        size:size,
        files:{
          data:data,
          contentType:mimetype
        }
      })
      const User = new EveningHnd2Models({
        fullname:fullname,
        matriculation:matriculation,
        morneven:morneven,
        level:level,
        name:name,
        desc:"my first photo",
        size:size,
        files:{
          data:data,
          contentType:mimetype
        }
      })
      UserM.save().then((red)=>{
        res.redirect('/')
        console.log('evening student')
      })
      .catch((err)=>{
        console.log(err)
        res.redirect('/assignment')
      })
      User.save().then((red)=>{
        
      })
      .catch((err)=>{
        console.log(err)
      })
// end1

     }else if(level=="HND1"){
      const UserM = new General({
        fullname:fullname,
        matriculation:matriculation,
        morneven:morneven,
        level:level,
        name:name,
        desc:"my first photo",
        size:size,
        files:{
          data:data,
          contentType:mimetype
        }
      })
      const User = new EveningHnd1Models({
        fullname:fullname,
        matriculation:matriculation,
        morneven:morneven,
        level:level,
        name:name,
        desc:"my first photo",
        size:size,
        files:{
          data:data,
          contentType:mimetype
        }
      })
      UserM.save().then((created)=>{
        console.log('it has be created')
        res.redirect('/')
      })
      .catch((err)=>{
        res.redirect('/assignment')
        console.log(err)
      })
      User.save().then((created)=>{
        
      })
      .catch((err)=>{
        console.log(err)
        
      })
     }else if(level == "ND2"){
      const UserE = new General({
        fullname:fullname,
        matriculation:matriculation,
        morneven:morneven,
        level:level,
        name:name,
        desc:"my first photo",
        size:size,
        files:{
          data:data,
          contentType:mimetype
        }
      })
      const User = new Eveningnd2Models({
        fullname:fullname,
        matriculation:matriculation,
        morneven:morneven,
        level:level,
        name:name,
        desc:"my first photo",
        size:size,
        files:{
          data:data,
          contentType:mimetype
        }
      })
      UserE.save().then((created)=>{
        console.log('it has be created')
        res.redirect('/')
      })
      .catch((err)=>{
        console.log(err)
        res.redirect('/assignment')
      })
      User.save().then((created)=>{
        console.log(created)
      })
      .catch((err)=>{
        console.log(err)
      })
     }else if(level == "ND1"){
      const UserE = new General({
        fullname:fullname,
        matriculation:matriculation,
        morneven:morneven,
        level:level,
        name:name,
        desc:"my first photo",
        size:size,
        files:{
          data:data,
          contentType:mimetype
        }
      })
      const User = new Eveningnd1Models({
        fullname:fullname,
        matriculation:matriculation,
        morneven:morneven,
        level:level,
        name:name,
        desc:"my first photo",
        size:size,
        files:{
          data:data,
          contentType:mimetype
        }
      })
      UserE.save().then((created)=>{
        console.log('it has be created')
        res.redirect('/')
      })
      .catch((err)=>{
        console.log(err)
        res.redirect('/assignment')
      })
      User.save().then((created)=>{
        console.log(created)
      })
      .catch((err)=>{
        console.log(err)
      })
     }
    // END OF MORNING
    }
    })
        }
        // end the evening conditions
}
}
      }else{
       res.redirect('/assignment')
     
      }




}





catch (error) {
    console.log(error)
    res.send('error')  
}
 })





module.exports = router
