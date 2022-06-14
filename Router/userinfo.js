const express = require('express')
const router = express.Router()
const UserInfo = require('../Model/Login')
const Validation = require('../Model/Validation')



// starting page route
router.get('/login',(req,res)=>{
    res.render('login', { layout: 'login'})
})

router.post('/login',(req,res)=>{
    const {email, password1} = req.body
    if(!email || !password1){
        res.redirect('/admin/login')
    }else{
        UserInfo.findOne({email:email,password1:password1}).then((user)=>{
            if(!user){
                res.redirect('/admin/login')
            }
            else{
                res.redirect('/admin')
            }
        })
    }
    
})


router.get('/register',(req,res)=>{
    res.render('register', { layout: 'register'})
})
router.post('/register',(req,res)=>{
    
        const {username, firstname, lastname, email, password1, password2,validation } = req.body
        let errors =[]
    
        if(!username || !firstname || !lastname || !email || !password1 || !password2 || !validation){
            errors.push({msg: 'please fill all the fields'})
    
        }
        
        if(password1 !== password2){
            errors.push({msg:'please enter the correct field'})
        }
    
        if(password1.length < 6){
            errors.push({msg:'please your password should be more than six charater'})
        }
    
        if(errors.length > 0){
            res.render('register',{
                errors,layout:'register'
            })

            
        }if(!validation){
            res.send('no validation')
        }
        else{
            UserInfo.findOne({email:email}).then(user=>{
                if(user){
                    res.render('register',{ layout:'register',username,firstname,
                    lastname,email,validation})
    
                }
                else{
                    
                  

                   Validation.findOne({validation:validation}).then((user)=>{
                    if(user){
                        res.render('register',{ layout:'register',username,firstname,
                        lastname,email,validation})
        
                    }else{
                        const newUser = new UserInfo({
                            username,
                            firstname,
                            lastname,
                            email,
                            password1,
                            password2
                        })
     
                        newUser.save({}).then((resp)=>{
                            res.redirect('/admin/login')
                        })
                        .catch((error)=>{
                            console.log(error)
                        })

                    }
                   })
                   
                
                // Userdb.create({}).then(respose=>{console.log(respose) }).catch(err=>{console.error(err)})
                //   bcrypt.genSalt(10, (err,salt)=>{bcrypt.hash(newUser.password1, salt , (err,hash)=>{
                //       if(err) throw err;
    
    
                //     //   newUser.password1 = hash;
                //     //   newUser.save().then(user=>{
                //     //        req.flash('success_msg', 'You are now Registered and can log in ')
                //     //        res.redirect('/users/login')
                //     //     })
                //     //   .catch(err=> console.log(err))
                //   })
    
                //   })
                }
            })
    
    
        }
    
    })







module.exports = router