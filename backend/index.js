const express = require("express");
const app=express();
const cors = require('cors')
const mainrouter=require("./routes/index.js")
const signupScema=require("./zod.js");
const jwt=require("jsonwebtoken")
const { JWT_SECRET } = require("./config.js");
const { User } = require("./database.js");
app.use(cors())
app.use("/api/v1",mainrouter)
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
//   });

app.use(express.json());
app.listen(3000)