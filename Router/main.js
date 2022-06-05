const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const Notification = require('../Model/Notification')
const Edit = require('../Model/Edit')


router.get('/',(req,res)=>{
    Notification.find({},(err,inform)=>{

        if(err){
            console.log(err)
            res.status(500).send("it's a server err" + err)
        }else{
            Edit.find({},(err,informs)=>{

                if(err){
                    console.log(err)
                    res.status(500).send("it's a server err" + err)
                }else{
                    res.render('index',{layout:'index',list:inform,editlist:informs})
                    
            
                }
            
            })
            
            
    
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
