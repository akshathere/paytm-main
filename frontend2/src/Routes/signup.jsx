import { useState } from "react";
import { Headings } from "../Components/heading";
import { Input } from "../Components/input";
import { Submit } from "../Components/submit";
import { Warning } from "../Components/warning";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export function Signup(){
    const navigate=useNavigate();
    const [name,setName]=useState("")
    const [Lname,setLName]=useState("")
    const [Email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    return <>
    <div className="flex  justify-center">
    <div className=" flex w-2/4 bg-blue-30 m-10 justify-center round rounded-lg">
    <div className="w-96 bg-white round rounded-lg m-10 flex flex-col justify-center">
    <Headings></Headings>
    <Input onChange={e=>{
        setName(e.target.value) 
    }} label={"Name"} placeholder="john"></Input>
    <Input onChange={e=>{
        setLName(e.target.value) 
    }} label={"Last Name"} placeholder={"joshi"}></Input>
    <Input onChange={e=>{
        setEmail(e.target.value) 
    }} label={"E-mail"} placeholder={"jatt@gmail.com"}></Input>
    <Input onChange={e=>{
        setPass(e.target.value) 
    }} label={"Password"} placeholder={"kutta"}></Input>
    <Submit onClick={async ()=>{
        const res=await axios.post("http://localhost:3000/api/v1/user/signup",{
            username:Email,
            password:pass,
            firstName:name,
            lastName:Lname
        });

        localStorage.setItem("token", res.data.token)
        navigate("/dashboard")
        console.log("done")
    }} sign={"Sign up"}></Submit>
    <Warning></Warning>
    </div>
    </div>
    </div>
    </>

}
