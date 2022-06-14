const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const Notification = require('../Model/Notification')

const MorningHnd1Models = require('../Model/HND1')
const MorningHnd2Models = require('../Model/HND2')


const Morningnd1Models = require('../Model/ND1')
const Morningnd2Models = require('../Model/ND2')

const EveningHnd2Models = require('../Model/HND22')
const EveningHnd1Models = require('../Model/HND11')

const Eveningnd2Models = require('../Model/ND22')
const Eveningnd1Models = require('../Model/ND11')


// morning hn2
router.get('/MorningHND2',(req,res)=>{
  MorningHnd2Models.find({},(err,inform)=>{

    if(err){
        console.log(err)
        res.status(500).send("it's a server err" + err)
    }else{
      res.render('hnd2',{layout:'hnd2',content:'HND2',list:inform})
        

    }

})   
})

// morning hnd1
router.get('/MorningHND1',(req,res)=>{
  MorningHnd1Models.find({},(err,inform)=>{

    if(err){
        console.log(err)
        res.status(500).send("it's a server err" + err)
    }else{
      res.render('hnd1',{layout:'hnd1',content:'HND1',list:inform})
        

    }

})   
})
// morning nd2
router.get('/MorningND2',(req,res)=>{
  Morningnd2Models.find({},(err,inform)=>{

    if(err){
        console.log(err)
        res.status(500).send("it's a server err" + err)
    }else{
      res.render('nd2',{layout:'nd2',content:'ND2',list:inform})
        

    }

})   
})

// morning nd1
router.get('/MorningND1',(req,res)=>{
  Morningnd1Models.find({},(err,inform)=>{

    if(err){
        console.log(err)
        res.status(500).send("it's a server err" + err)
    }else{
      res.render('nd1',{layout:'nd1',content:'ND1',list:inform})
        

    }

})   
})


// EVENING STUDENT

// Evening hn2
router.get('/EveningHND2',(req,res)=>{
  EveningHnd2Models.find({},(err,inform)=>{

    if(err){
        console.log(err)
        res.status(500).send("it's a server err" + err)
    }else{
      res.render('hnd2',{layout:'hnd2',content:'HND2',list:inform})
        

    }

})   
})

// Evening hnd1
router.get('/EveningHND1',(req,res)=>{
  EveningHnd1Models.find({},(err,inform)=>{

    if(err){
        console.log(err)
        res.status(500).send("it's a server err" + err)
    }else{
      res.render('hnd1',{layout:'hnd1',content:'HND1',list:inform})
        

    }

})   
})
// Evening nd2
router.get('/EveningND2',(req,res)=>{
  Eveningnd2Models.find({},(err,inform)=>{

    if(err){
        console.log(err)
        res.status(500).send("it's a server err" + err)
    }else{
      res.render('nd2',{layout:'nd2',content:'ND2',list:inform})
        

    }

})   
})

// Evening nd1
router.get('/EveningND1',(req,res)=>{
  Eveningnd1Models.find({},(err,inform)=>{

    if(err){
        console.log(err)
        res.status(500).send("it's a server err" + err)
    }else{
      res.render('nd1',{layout:'nd1',content:'ND1',list:inform})
        

    }

})   
})



module.exports = router
