import {Request, Response} from "express";
import Image from "../models/images";
import Category from "../models/categories";

exports.addImage=async(req:Request,res:Response)=>{
    try{
        const newImage= await Image.create(req.body)
        res.status(201).json(newImage)
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
    }
}
exports.updateImage = async (req:Request,res:Response)=>{
    try{
        const image =await Image.findOneAndUpdate(req.params.name,req.body,{new:true})

        res.status(200).json({
            data:{
                image
            }
        })
    }catch(e){
        res.status(404).json({
            status:"fail",
            message:e
        })
    }
}
exports.getImage=async(req:Request,res:Response)=>{
    try{
        const image =await Image.findOne({"word":req.params.word})
        //console.log("$$$$$")
        //console.log(image)
        // res.write(res.json(), 'utf8', () => {
        //     console.log("Writing string Data...");
        // });
        // res.end(' ok');
        res.status(200).json({
           img:image
        })
        return res
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
    }
}
