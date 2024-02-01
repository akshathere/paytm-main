const express=require("express")
const router = express.Router();
const userRouter=require("./user");
const { accRouter } = require("./account");
router.use("/user",userRouter);
router.use("/account",accRouter)
module.exports=router
// router.get('/', function (req, res, next) {
//     console.log("Router Working");
//     res.end();
// })
