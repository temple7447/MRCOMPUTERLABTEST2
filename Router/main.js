const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const Notification = require('../Model/Notification')


router.get('/',(req,res)=>{
    Notification.find({},(err,inform)=>{

        if(err){
            console.log(err)
            res.status(500).send("it's a server err" + err)
        }else{
            res.render('index',{layout:'index',list:inform})
            
    
        }
    
    })
    
})
router.get('/assignment',(req,res)=>{
    
    res.render('assignment',{layout:'submit'})
})
router.get('/contact',(req,res)=>{
    
    res.render('contact',{layout:'contact'})
})

// router.get('/search',((req,res)=>{
//     const search = req.body
//     console.log(search)
// }))


module.exports = router
