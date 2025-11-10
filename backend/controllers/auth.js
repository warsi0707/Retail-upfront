const bcrypt = require("bcrypt");
const { User } = require("../model/userModel");

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

module.exports = {
  userSignup,
};
