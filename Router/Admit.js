const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const fs = require("fs");
const MorningHnd2Model = require('../Model/MorningHnd2Model');


const MorningHnd1Models = require('../Model/HND1')
const MorningHnd2Models = require('../Model/HND2')


const Morningnd1Models = require('../Model/ND1')
const Morningnd2Models = require('../Model/ND2')

const EveningHnd2Models = require('../Model/HND22')
const EveningHnd1Models = require('../Model/HND11')

const Eveningnd2Models = require('../Model/ND22')
const Eveningnd1Models = require('../Model/ND11')
    


    router.get('/',(req,res)=>{
        MorningHnd2Models.count().then((HND2M)=>{

            MorningHnd1Models.count().then((HND1M)=>{

                Morningnd2Models.count().then((ND2M)=>{

                    Morningnd1Models.count().then((ND1M)=>{

                        EveningHnd2Models.count().then((HND2E)=>{

                            EveningHnd1Models.count().then((HND1E)=>{

                                Eveningnd2Models.count().then((ND2E)=>{

                                    Eveningnd1Models.count().then((ND1E)=>{

                        
                                        MorningHnd2Model.find({},(err,inform)=>{

                                            if(err){
                                                console.log(err)
                                                res.status(500).send("it's a server err" + err)
                                            }else{
                                                res.status(200).render('Admin',{layout:'Admin',list:inform,count:inform,
                                            HND2M:HND2M/100,
                                        HND1M:HND1M/100,
                                    ND2M:ND2M/100,
                                ND1M:ND1M/100,
                            HND2E:HND2E/100,
                        HND1E:HND1E/100,
                    ND2E:ND2E/100,
                ND1E:ND1E/100})
                             }
                
                                        })



                        
                                    }).catch((err)=>{
                                        console.log(err)
                                    })
                        
                                }).catch((err)=>{
                                    console.log(err)
                                })
                        
                        
                            }).catch((err)=>{
                                console.log(err)
                            })
                        
                        
                        }).catch((err)=>{
                            console.log(err)
                        })

                        
                    }).catch((err)=>{
                        console.log(err)
                    })
            
                }).catch((err)=>{
                    console.log(err)
                })
            
            }).catch((err)=>{
                console.log(err)
            })

        }).catch((err)=>{
            console.log(err)
        })

})








module.exports = router
