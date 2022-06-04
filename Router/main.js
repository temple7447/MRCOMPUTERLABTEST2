const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");


router.get('/home',(req,res)=>{
    
    res.render('index',{layout:'index'})
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
