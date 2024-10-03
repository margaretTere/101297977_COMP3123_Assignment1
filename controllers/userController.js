const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

//Signing up new users using post request
exports.signUpUser = async  (req, res) =>{
    try{
        const data = req.body;

        if (!data.password)
            throw Error('Please provide password');
        
        data.password = await bcrypt.hash(data.password, 8);
        const newUser = await User.create(data);

        res
            .status(201)
            .json({
                message: `User created succesfully. User Id ${newUser._id}`
            });
    
      } catch (err){
            res
                .status (400).json({
                    status: false,
                    message: err.message
                });
    
      }
};
//Login in existing users using post request
exports.loginUser = async(req,res) =>{
try { 
    const req_email = req.body.email;
    const req_password = req.body.password;

    const user = await User.findOne({'email': req_email});

    // check if such user exists
    if(user === null){
        throw Error('Invaild Username and password')
    }
    
    if(await bcrypt.compare(req_password, user.password)){
        res
            .status(200)
            .json({
                    message: `Login Successful`
                
            });
    } else {
        throw Error('Invaild Username and password');
    }
  
  } catch (err){
        res
            .status (400).json({
                status: false,
                message: err.message
            });

  }
  
    };