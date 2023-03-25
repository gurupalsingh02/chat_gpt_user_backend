const userService = require('../services/user_services');
exports.register =  async(req,res,next)=>{
    try{
        // const {email,password} = req.body;
        const email = req.body['email'];
        const password = req.body['password'];
        console.log(email+"   "+password);
        // const successres = userService.registerUser(email,password);
        // res.json({status:true,success:'user registered successfully'});
    }catch(e){
        throw e;
    }
}