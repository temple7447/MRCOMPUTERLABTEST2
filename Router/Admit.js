const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const fs = require("fs");
const MorningHnd2Model = require('../Model/MorningHnd2Model');


    


    router.get('/',(req,res)=>{
MorningHnd2Model.find({},(err,inform)=>{

    if(err){
        console.log(err)
        res.status(500).send("it's a server err" + err)
    }else{
        res.status(200).render('Admin',{layout:'Admin',list:inform,count:inform,content:"DASHBOARD"})
        

    }

})
})





module.exports = router
