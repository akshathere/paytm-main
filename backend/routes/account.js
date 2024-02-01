const express=require("express")
const { Accounts } = require("../database");
const {User} = require("../database")
const accRouter=express.Router();
const authMiddleware=require("../middlewares");
const { default: mongoose } = require("mongoose");
accRouter.get("/balance",authMiddleware,async (req,res)=>{
    const user2=await Accounts.findOne({
        userId:req.userId
    })
    console.log(user2.balance)
    if(!user2){
        return res.status(401).send(req.userId)
    }
    res.status(200).json({
        balance: user2.balance
    })
    
    
    
})
const transferFunds = async (fromAccountId, toAccountId, amount) => {
    // Decrement the balance of the fromAccount
    await Accounts.findByIdAndUpdate(fromAccountId, { $inc: { balance: -amount } });

    // Increment the balance of the toAccount
    await Accounts.findByIdAndUpdate(toAccountId, { $inc: { balance: amount } });
}
const app=express()
const bodyParser=require("body-parser")
accRouter.use(bodyParser.json())
// Example usage
app.use(express.json())
accRouter.post("/transfer",authMiddleware,async (req,res)=>{
    const sesion=await mongoose.startSession();
    sesion.startTransaction();
    const user1=await Accounts.findOne({
        userId:req.userId
    })
    console.log(user1.balance)
    const {to,amount}=req.body
    const user2=await Accounts.findOne({userId:to})
    if(!user2){
       return res.status(400).send("Invalid user")
    }
    if(user1.balance<amount){
        return  res.status(400).send("Insufficient balance")
    }
    await Accounts.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(sesion);
    await Accounts.updateOne({ userId: to }, { $inc: { balance: amount } }).session(sesion);
    await sesion.commitTransaction()
    console.log(user1.balance,user2.balance)
    res.status(200).send("Transfer successfull")
})

module.exports=({accRouter})
