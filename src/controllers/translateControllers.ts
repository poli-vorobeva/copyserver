import {Request, Response} from "express";
import Translate from "../models/translate";

exports.addTranslate=async(req:Request,res:Response)=>{
    try{
        const newTranslate= await Translate.create(req.body)
        //const category= Category
        //await category.create
        res.status(201).json(newTranslate)
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
    }
}
exports.getTranslate=async(req:Request,res:Response)=>{
    try{
        const word =await Translate.findOne({"word":req.body.word})
        res.status(200).json({
            body:req.body
        })
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
    }
}
