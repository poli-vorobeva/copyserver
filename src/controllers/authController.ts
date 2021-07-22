import {NextFunction, Request, Response} from "express";
import { TextEncoder } from "util";
import {KeyLike} from "crypto";
const jwt = require('jsonwebtoken')
const User = require('../models/users')
const { promisify}= require('util')

const signToken = (id:string)=>{
    return jwt.sign({id},
        'hi-there',{
        expiresIn:"90d"
        })
}

exports.signup = async (req:Request,res:Response,next:NextFunction)=>{
    console.log('eee')
    try{
        const newUser = await User.create(req.body)
        const id:string=newUser._id
       const token=signToken(id)
        console.log('###Token',token)
        res.status(201).json({
            status: 'success',
            token,
            data: {
                user: newUser,
                token
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
        console.log(user,'!!!',await user ,'--',password)
        //console.log('$$',user);
        let token =''
        if(user.password===password){
           //console.log("OK!!!")
           token=signToken(user._id)
       }
        res.status(200).json({
            status:'success',
            token,
            user
        })
    }catch(e){
        console.log(e)
    }

}
exports.protect =async (req:Request,res:Response,next:NextFunction)=>{
let token;
if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    token = req.headers.authorization.split(' ')[1]
}
//получаем массив категорий
if(!token){
    return next(new Error('Please login'))
}
    next()
}
