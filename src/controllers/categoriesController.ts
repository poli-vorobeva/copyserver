import {NextFunction, Request, Response} from "express";
import Category from "../models/categories";
import Translate from "../models/translate";
//import category from '../models/categories'
const fs = require('fs')
exports.createNewCategory= async (req:Request,res:Response)=>{
    try{
        const newCategory = await Category.create(req.body)
        //const category= Category
        //await category.create
        res.status(201).json(newCategory)
    }catch(err){
        res.status(400).json({
            status:'fail',
            message:err
        })
    }

    //const ids:number[]=[]
    // Object.keys(categories).forEach(cat=>ids.push(categories[cat].id))
    // const id=ids.sort((a,b)=>b-a)[0]+1
    // const newCategory:{[key:string]:string|number}={
    //     id:id,
    //     title:req.body.title,
    //     images:req.body.images
    // }
    // categories[req.body.name]=newCategory
    // fs.writeFile(`${__dirname}/Categories.json`,
    //     categories,(err:Error)=>{
    //         if (err){
    //             console.log(err);
    //         }
    //     })
}

//const Category = require('../models/categories')
exports.getAllCategories = async (req:Request,res:Response)=>{
    try{
        const categories = await Category.find()
        res.status(200).json({
            categories
        })
    }catch (e) {
        res.status(404).json({
            status:'fail',
            message:e
        })
    }

}
exports.getCategory = async (req:Request,res:Response)=>{
  try{
      const category =await Category.findOne({"name":req.params.name})
      res.status(200).json({
      category,
        })
  }catch(e){
      res.status(404).json({
          status:'fail',
          message:e
      })
  }
}
exports.updateCategory = async (req:Request,res:Response)=>{
    console.log("BODY",req.body)
    console.log('par',req.params.name)
    try{
     const category =await Category.findOneAndUpdate({"name":req.params.name},req.body,{new:true})

        res.status(200).json({
              data:{
              category
              }
        })
    }catch(e){
     res.status(404).json({
         status:"fail",
         message:e
     })
    }

    // const category = categories[req.params.path]
    // if(!categories[req.params.path]){
    //     return res.status(404).json({
    //         status:"fail",
    //         message:"Invalid Category"
    //     })
    // }
    // res.status(200).json({
    //     category
    // })
}
exports.deleteCategory = async (req:Request,res:Response)=>{
    try{
        const category =await Category.findOneAndDelete({"name":req.params.path})
        res.status(200).json({
            category,
        })
    }catch(e){
        res.status(404).json({
            status:'fail',
            message:e
        })
    }
}
