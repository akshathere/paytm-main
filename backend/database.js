const mongoose = require('mongoose');
const { string, Schema } = require('zod');

mongoose.connect("mongodb+srv://akshat:hello@cluster0.wnua6bj.mongodb.net/paytm");
const paytmSchema=new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
}) 
const User = mongoose.model('paytmm', paytmSchema); 
const accountSchema=new mongoose.Schema({
	userId: {
        type: mongoose.Schema.Types.ObjectId,ref: "User",required: true
    },
	balance: {
        type: Number,
        required: true
}
})

const transferFunds = async (fromAccountId, toAccountId, amount) => {
    // Decrement the balance of the fromAccount
    try{
       await Account.findByIdAndUpdate(fromAccountId, { $inc: { balance: -amount } }); 
    }catch(err){
        return res.status(401).send("Transaction could not be completed ");
    }
	  

    // Increment the balance of the toAccount
    try{
        await Account.findByIdAndUpdate(toAccountId, { $inc: { balance: amount } });
    }catch(err){
        await Account.findByIdAndUpdate(fromAccountId, { $inc: { balance: amount } });
        return res.status(401).send("Transaction could not be completed ");
    }
}
const Accounts=mongoose.model('Account',accountSchema)
module.exports=({
    User,
    Accounts
})