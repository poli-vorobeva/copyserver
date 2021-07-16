import {NextFunction, Request, Response} from "express";
import { TextEncoder } from "util";
import {KeyLike} from "crypto";
const jwt = require('jsonwebtoken')
const User = require('../models/users')

const signToken = (id:string)=>{
    return jwt.sign({id},
        process.env.JWT_SECRET,{
        expiresIn:"90d"
        })
}

exports.signup = async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const newUser = await User.create(req.body)
        const id:string=newUser._id
       const token=signToken(id)
        res.status(201).json({
            status: 'success',
            token,
            data: {
                user: newUser
            }
        })
    }
    catch(e){
        console.log(e)
    }

}

exports.login = async (req:Request,res:Response,next:NextFunction)=>{
    try{
        const {email,password}= req.body
        if(!email|| !password){
            return res.status(400).json({
                status:'error',
                message:"Please provide email and password"
            })
        }
        const user= await User.findOne({"email":email})
       if(user.password===password){
           console.log('$$',user);
           console.log("OK!!!")
       }
        const token =''
        res.status(200).json({
            status:'success',
            token,
            user
        })
    }catch(e){
        console.log(e)
    }

}
