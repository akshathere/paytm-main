const express = require("express");
const signupScema=require("../zod.js");
const signinScema=require("../zod.js");
const jwt=require("jsonwebtoken")
const { JWT_SECRET } = require("../config.js");
const { User, Accounts } = require("../database.js");
const userRouter = express.Router();
const authMiddleware=require("../middlewares")
const updateBody=require("../zod.js");
const app=express()
const bodyParser=require("body-parser")
userRouter.use(bodyParser.json())
const cors=require("cors")
app.use(cors())
userRouter.post("/signup",async (req,res)=>{
    const ss=signupScema.safeParse(req.body)
    
    if(!ss.success){
        
       return res.status(404).send(success);
    }
    const response=await User.findOne({username: req.body.username})  
    if(response){
        return res.status(404).send("user already exists");
    }
    const user1=await User.create({
        username:req.body.username,
        password:req.body.password,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
    })
    const id=user1._id
    await Accounts.create({
        userId:id,
        balance:Math.floor(Math.random() * 10000) + 1
    })
    
    const token=jwt.sign({
        id},JWT_SECRET)
    // Accounts.findOne({username: req.body.username}).then((acc)=>{
    //     const randomNumber = Math.floor(Math.random() * 10000) + 1;
    //     acc.updateOne({balance:randomNumber})
    // })
    res.json({
        msg:"user created",
        token:token
    })
})
userRouter.post("/signin",async (req,res)=>{
    // const {sucess}=signinScema.safeParse(req.body);
    // if(!sucess){
    //     return res.status(401).json({
    //         message: "wrong input type maybe?"
    //     })
    // }

    const user= await User.findOne({username: req.body.username
    })
    if(user){
        const token=jwt.sign({
            userId:user._id
        },JWT_SECRET)
        res.json({
            token:token
        })
        return
    }
    res.status(401).json({
        message: "Error while logging in"
    })

})


userRouter.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne(req.body, {
        _id: req.userId
    })
    res.json({
        message: "Updated successfully"
    })
})


userRouter.get("/buld",async(req,res)=>{
    const name=req.query.filter || ""
    User.find().or([{ firstName: {
                        "$regex":name
                    }
                    }, { lastName:{
                        "$regex":name
                    }  }])
    .then(users => {
        res.status(200).json({
            user:users.map(user1=>({
                    username:user1.username,
                    firstName: user1.firstName,
                    lastName: user1.lastName,
                    _id: user1._id
                }))
            })
        })
    
    .catch(error => { 
        res.status(401).json({
            msg:"error ha paji filter glt aa"
        })
     })
})
module.exports=(userRouter)