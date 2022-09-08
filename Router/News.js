const express = require('express')
const router = express.Router()

// starting page route
router.get('/',(req,res)=>{
    res.render('newsapi',{layout:'index'})  

})



module.exports = router;