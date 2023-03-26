const router = require('express').Router();
const userModel = require('../models/user_model');
const bcrypt = require('bcrypt');

router.get('/:email', async(req,res)=>{
    const email = req.params.email;
    const foundUser = await userModel.findOne({email:email});
    if(!foundUser){
        res.json({success:false, message:'user not found'});
        return ;
    }
    res.json({success:true, message:foundUser});
});
router.post('/createaccount', async(req,res)=>{
    try{

        // Encrypting the password
        const userData = req.body;
        const password = userData.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        userData.password = hash;
        const newUser = new userModel(userData);
        await newUser.save();
        res.json({success:true, message:'Account created successfully'});
    }
    catch(err){
        res.json({success:false, message:err.message});
    }
});

router.post('/login', async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        const foundUser = await userModel.findOne({email:email});
        if(!foundUser){
            res.json({success:false, message:'user not found'});
            return ;
        }
        const correctpassword = await bcrypt.compare(password,foundUser.password);
        if(!correctpassword){
            res.json({success:false, message:'incorrect password'});
            return ;
        }
        res.json({success:true, message:foundUser});        
    }
    catch(err){
        res.json({success:false, message:err.message});
    }
});

module.exports = router