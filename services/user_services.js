const userModel = require("../models/user_model");

class userServices{
    static async registerUser(email,password){
        try{
            const createUser = new userModel({email,password});
            return await createUser.save();
        }
        catch(e){
            throw e;
        }
    }
}
module.exports = userServices;