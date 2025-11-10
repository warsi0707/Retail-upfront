const bcrypt = require("bcrypt");
const { User } = require("../model/userModel");
const jwt = require("jsonwebtoken");
const { USER_JWT_SECRET } = require("../utils/Utils");

const userSignup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if(existingUser.email === email){
        return res.status(404).json({
            error: "User already exist"
        })
    }
    const hashPassword =await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fullName,
      email,
      password: hashPassword,
    });
    return res.json({
        message: "Signup success"
    });
  } catch (error) {
    return res.status(404).json({
      error: error,
    });
  }
};
const userSignin = async(req, res)=>{
    const {email, password} = req.body;
    try{
        const findUser = await User.findOne({email})
        if(!findUser){
            return res.status(404).json({
                error: "User not found, please signup"
            })
        }
        const comparePassword = findUser ? bcrypt.compare(password, findUser.password): false;
        if(!comparePassword){
            return res.status(404).json({
                error: "Incorrect password"
            })
        }
        const token = jwt.sign({
            userId: findUser._id 
        }, USER_JWT_SECRET)
        return res.json({
            message: "Signin success",
            token: token, 
            user: {
                fullName: findUser.fullName,
                email: findUser.email,
                role: findUser.role
            }
        })
    }catch(error){
        return res.status(404).json({
            error: error
        })
    }
}
const userProfile = async(req, res)=>{
    try{
        const user = await User.findOne({_id: req.user}.userId)
        if(!user){
            return res.status(404).json({
                error: "User not found"
            })
        }
        return res.json({
            user: {
                email: user.email,
                fullName: user.fullName,
                role: user.role
            }
        })
    }catch(error){
        return res.status(404).json({
            error: error
        })
    }
}

module.exports = {
  userSignup,
  userSignin,
  userProfile
};
