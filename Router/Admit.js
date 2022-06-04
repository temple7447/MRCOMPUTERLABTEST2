const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const MorningHnd2Model = require('../Model/MorningHnd2Model');

MorningHnd2Model.find({}).then((resp)=>{
    router.get('/',(req,res)=>{
    
        res.render('Admin',{layout:'Admin',res:res})
       
    })
})
.catch((err)=>{
    console.log(err)
})



// morning router
router.get('/MorningHND2',(req,res)=>{
    res.render('morning',{layout:'morning'})
})
router.get('/MorningHND1',(req,res)=>{
    res.render('morning',{layout:'morning'})
})
router.get('/MorningND2',(req,res)=>{
    res.render('morning',{layout:'morning'})
})
router.get('/MorningND1',(req,res)=>{
    res.render('morning',{layout:'morning'})
})

// evening router
router.get('/EveningHND2',(req,res)=>{
    res.send('EveningHND2')
})
router.get('/EveningHND1',(req,res)=>{
    res.send('EveningHND1')
})
router.get('/EveningND2',(req,res)=>{
    res.send('EveningND2')
})
router.get('/EveningND1',(req,res)=>{
    res.send('EveningND1')
})




module.exports = router
