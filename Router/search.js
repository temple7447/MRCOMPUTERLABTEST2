const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const MorningHnd2Model = require('../Model/MorningHnd2Model');



router.post('/search',((req,res)=>{
    const {search} = req.body
    MorningHnd2Model.find({matriculation:search}).then((detail)=>{
        detail.forEach((inform)=>{
            res.send(inform)
        })
    }).catch((err)=>{
        console.log(err)
    })

}))


module.exports = router
