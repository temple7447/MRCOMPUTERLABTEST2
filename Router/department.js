const express = require('express')
const router = express.Router()



router.get('/civil',(req,res)=>{
    res.render('civil',{layout:'index'})
})

router.get('/chemical',(req,res)=>{
    res.render('chemical',{layout:'index'})
})

router.get('/electrical',(req,res)=>{
    res.render('electrical',{layout:'index'})
})

router.get('/miniral',(req,res)=>{
    res.render('miniral',{layout:'index'})
})

router.get('/mechanical',(req,res)=>{
    res.render('mechanical',{layout:'index'})
})


module.exports = router
