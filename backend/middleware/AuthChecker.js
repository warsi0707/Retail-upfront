const jwt = require("jsonwebtoken")
const { USER_JWT_SECRET } = require("../utils/Utils")

const AuthChecker = (req, res, next)=>{
    const token = req.headers.token
    try{
        if(!token){
            return res.status(404).json({
                error: "Login required"
            })
        }
        const decoded = jwt.verify(token, USER_JWT_SECRET)
        
        if(!decoded){
            return res.status(404).json({
                error: "Login required"
            })
        }
        req.user = decoded;
        next()
    }catch(error){
        return res.status(404).json({
            error: "Login required"
        })
    }
}
module.exports = AuthChecker