import {Request, Response} from "express";
import Image from "../models/images";

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
exports.getImage=async(req:Request,res:Response)=>{
    try{
        const image =await Image.findOne({"word":req.params.word})
        console.log("$$$$$")
        console.log(image)
        res.write(res.json(), 'utf8', () => {
            console.log("Writing string Data...");
        });
        res.end(' ok');

        res.status(200).json({
           img:image
        })
        console.log(res.json())
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
    }
}
