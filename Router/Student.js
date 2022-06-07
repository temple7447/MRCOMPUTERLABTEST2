const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const multer = require("multer");
const upload = multer({ dest: 'uploads/' })
const connection = require('../config/sql')
const MatriculationMorning = require('../Model/MatriculationModelMorning')
const MatriculationEvening = require('../Model/MatriculationModelEvening')
const MorningHnd2Model = require('../Model/MorningHnd2Model')
const EveningHnd2Model = require('../Model/EveningHnd2Model')

// createMysql().then((res)=>{console.log('it was successful')}).catch(err=>console.log(err))

router.post('/submitted', upload.single('file'), async(req, res, next)=> {
  const {fullname,matriculation,morneven,level,file} = req.body

  if(!fullname && !matriculation && !morneven && !level){
    
res.status(401).send('you need to fill all the form,the information you enter is not completed')
console.log(fullname,matriculation,morneven,level)
  }else{
    if(morneven == "MORNING"){
      MatriculationMorning.findOne({matriculation:matriculation}).then((user)=>{
        if(!user){
          console.log('your name is not on the list')
        res.send('your name is not on the list of auchi polytechnic')
        }else{
         if(level == "HND2"){
          const User = new MorningHnd2Model({
            fullname:fullname,
            matriculation:matriculation,
            morneven:morneven,
            level:level
          })
          User.save().then((created)=>{
            console.log('it has be created')
          }).then((red)=>{
            res.send('what you enter was successful')
          })
          .catch((err)=>{
            console.log(err)
          })
         }else 

         if(level == "HND1"){
          const User = new MorningHnd2Model({
            fullname:fullname,
            matriculation:matriculation,
            morneven:morneven,
            level:level
          })
          User.save().then((created)=>{
            console.log('it has be created')
          }).then((red)=>{
            res.send('what you enter was successful')
          })
          .catch((err)=>{
            console.log(err)
          })

         }else
         if(level == "ND2"){
          const User = new MorningHnd2Model({
            fullname:fullname,
            matriculation:matriculation,
            morneven:morneven,
            level:level
          })
          User.save().then((created)=>{
            console.log('it has be created')
          }).then((red)=>{
            res.send('what you enter was successful')
          })
          .catch((err)=>{
            console.log(err)
          })


         }else

         if(level == "ND1"){
          const User = new MorningHnd2Model({
            fullname:fullname,
            matriculation:matriculation,
            morneven:morneven,
            level:level
          })
          User.save().then((created)=>{
            console.log('it has be created')
          }).then((red)=>{
            res.send('what you enter was successful')
          })
          .catch((err)=>{
            console.log(err)
          })

         }
          

       
        }
      }).catch((err)=>{
        console.log(err)
      })



    }else


    if(morneven == "EVENING"){
      MatriculationEvening.findOne({matriculation:matriculation}).then((user)=>{
        if(!user){
          console.log('your name is not on the list')
        res.send('your name is not on the list of auchi polytechnic')
        }else{
          if(level == 'HND2'){
            const User = new EveningHnd2Model({
              fullname:fullname,
              matriculation:matriculation,
              morneven:morneven,
              level:level
            })

            User.save().then((created)=>{
              console.log('it has be checked')
            }).then((red)=>{
              res.send('what you enter was successful')
            })
            .catch((err)=>{
              console.log(err)
            })
          }else
          if(level == 'HND1'){
            const User = new EveningHnd2Model({
              fullname:fullname,
              matriculation:matriculation,
              morneven:morneven,
              level:level
            })

            User.save().then((created)=>{
              console.log('it has be created')
            }).then((red)=>{
              res.send('what you enter was successful')
            })
            .catch((err)=>{
              console.log(err)
            })
          }else
          if(level == "ND2"){
            const User = new EveningHnd2Model({
              fullname:fullname,
              matriculation:matriculation,
              morneven:morneven,
              level:level
            })

            User.save().then((created)=>{
              console.log('it has be created')
            }).then((red)=>{
              res.send('what you enter was successful')
            })
            .catch((err)=>{
              console.log(err)
            })
          }else
          if(level == "ND1"){
            const User = new EveningHnd2Model({
              fullname:fullname,
              matriculation:matriculation,
              morneven:morneven,
              level:level
            })

            User.save().then((created)=>{
              console.log('it has be created')
            }).then((red)=>{
              res.send('what you enter was successful')
            })
            .catch((err)=>{
              console.log(err)
            })
          }
         
  
       
        }
      }).catch((err)=>{
        console.log(err)
      })
    }
   
  

 }})




module.exports = router
