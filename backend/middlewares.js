const jwt=require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

const authMiddleware=(req,res,next)=>{
    const tt=req.headers.authorization;
    const myArray = tt.split(" ");
    let tokenn = myArray[1];
    try{
       const decode=jwt.verify(tokenn,JWT_SECRET) 
        console.log(decode)
        req.userId=decode.userId
        console.log(req.userId)
        next()
    }
    catch(err){
        return res.status(401).send("invalid token bete baap se backchodi?")
    }
}
module.exports=(authMiddleware)