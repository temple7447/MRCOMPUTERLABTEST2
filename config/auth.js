const isLoggingIn = (req,res,next)=>{
    if(req.isAuthenticated()) return next();
    
        res.redirect('/department/stafflogin');
}

const isLoggingout = (req,res,next)=>{
    if(!req.isAuthenticated()) return next();
    
        res.redirect('/admin');
  }


module.exports = {
    isLoggingIn,
    isLoggingout
}
