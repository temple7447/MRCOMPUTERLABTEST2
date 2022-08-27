const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const request = require('request')
const Notification = require('../Model/Notification')
const Edit = require('../Model/Edit')
const EditImage = require('../Model/Image')

const APIKEY = "4391f42befbb4afab31db42c05367f1d"
const APIURL = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4391f42befbb4afab31db42c05367f1d"

request(APIURL, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
})
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
                    EditImage.find({},(err,photo)=>{
                        if(err){
                            console.log(err)
                            res.status(500).send("it's a server err" + err) 
                        }else{
                            res.render('index',{layout:'index',list:inform,editlist:informs,photo:photo, title:"COMPUTERLAB"})

                        }
                    })
                    
            
                }
            
            })
            
            
    
        }
    
    })
    
})
router.get('/assignment',(req,res)=>{
    
    res.render('assignment',{layout:'register.hbs'})
})
router.get('/contact',(req,res)=>{
    
    res.render('contact',{layout:'contact'})
})

// router.get('/search',((req,res)=>{
//     const search = req.body
//     console.log(search)
// }))


module.exports = router
