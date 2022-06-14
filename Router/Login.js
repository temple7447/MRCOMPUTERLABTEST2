const express = require('express')
const router = express.Router()



// starting page route
router.get('/login',(req,res)=>{
    res.render('login', { layout: 'login'})
})



router.get('/dashboard',(req,res)=>{
    res.render('dashboard',{layout:'dashboard'})
})


module.exports = router