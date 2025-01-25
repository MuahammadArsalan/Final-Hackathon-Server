import mongoose from "mongoose";
import User from '../models/user.model.js'

const createUser = async(req,res)=>{
const {username,email,password} = req.body

if (!username){
    res.json({message:"Username is required"})
}

if (!email){
    res.json({message:"Username is email"})
}

if (!password){
    res.json({message:"Username is password"})
}

    let user = await User.create({
        username,email,password
    })
    res.status(201).json({message:"User added successfully"})
}


export {createUser}