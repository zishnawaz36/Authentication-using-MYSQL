import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import user from "../models/user.js";
import { where } from "sequelize";

const router = express.Router();

router.post("/auth/signup",async(req,res) => {
    const{name,password,email}=req.body;

    try{
        const existingUser = await user.findOne({where:{email}});
        if(existingUser){
            return res.status(400).json({msg:"User already exists"});
        }

        const hashpassword = bcrypt.hash(password,10);

        const createUser = await user.create({name,email,password:hashpassword});

        const token = jwt.sign({id:user.id},process.env. process.env.JWT_SECRET);
        res.json({token});
    }
    catch(err){
        res.status(500).json({msg:"Error to connect"});
    }
})

//login

router.post("/auth/login",(req,res) => {
    const{email,password}=req.body;

    try{
        const userdata = await user.findOne({where:email});

        if(!userdata){
            res.status(400).json({message:"Invalid credential"});
        } 

        const match = await bcrypt.compare(password,user.password);

        if(!match){
         res.status(400).json({message:"Invalid credential"});   
        }

        const token = jwt.sign({id:user.id},process.env.JWT_SECRET);
        res.json({token});
    }
    catch(err){
        res.status(500).json({msg:"Error in login"});
    }
});

//get

