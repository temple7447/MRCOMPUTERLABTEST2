const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const Notification = require('../Model/Notification')


router.get('/notification',(req,res)=>{
  Notification.find({},(err,inform)=>{

    if(err){
        console.log(err)
        res.status(500).send("it's a server err" + err)
    }else{
      res.render('notification',{layout:'notification',content:'NOTIFICATION',list:inform,})
        

    }

})
    
   
})
router.post('/notification',(req,res)=>{
    const {message,morneven,level,time} = req.body


    
    const User = new Notification({
        message:message,
        morneven:morneven,
        level:level,
        time:time
        
      })
      User.save().then((created)=>{
        console.log('it has be created for notification')
        res.redirect('/admin/notification')
      })
      .catch((err)=>{
        console.log(err)
        
      })
    
    
})


router.post('/notificationdelete',(req,res)=>{
 const {id} = req.body;
 Notification.deleteOne({_id:id}).then(()=>{
   res.redirect('/admin/notification')
 }).catch((err)=>{
   console.log(err)
 })
})
router.post('/notificationedit',(req,res)=>{
 const {id} = req.body;
 Notification.findOneAndUpdate({_id:id}).then((userinfo)=>{
const {message} = 
console.log(message)
   res.redirect('/admin/notification')
 }).catch((err)=>{
   console.log(err)
 })
})


module.exports = router
