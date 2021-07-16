import { Router } from 'express'
import {createCategory, deleteCategory, getCategories, getCategoryById} from "./repository";
import {Category} from "./category";

const router=Router();
const Categories = require('../models/Categories')
//all the categories
router.get('/',async (req,res)=>{
    res.send('we are at home')
    try{
        const categories= await Categories.find();
        res.json(categories)
    }catch(error){
        res.json({message:error})
    }
   // const categories = await getCategories()
   // res.json(categories)
})
//spesifyCategory
router.get('/:categoryId',(req,res)=>{
    console.log(req.params.categoryId)
})

//Send new Category
router.post('/',async (req,res)=>{
const categories=new Categories({
    id:req.body.id,
    name:req.body.name,
    images:req.body.images
})
    try{
        const saveCategory = await categories.save()
        res.json(saveCategory)
    }catch(error){
    res.json({message:error})
    }


})
// router.get('/:id', async( req,res)=>{
//     const catId = Number(req.params.id)
//     if(!catId){
//         return res.sendStatus(400)
//     }
//     const cat = await getCategoryById(catId)
//     if(!cat){
//         return res.sendStatus(404)
//     }
//     res.json(cat)
// })
// router.delete('/:id',async (req,res)=>{
//     const catId = Number(req.params.id)
//     if(!catId){
//         return res.sendStatus(400)
//     }
//     try{
//         await deleteCategory(catId)
//     }catch(e){
//         return res.status(404).send(e)
//     }
// })
//
// router.post('/',async (req,res)=>{
// const data = req.body as Category
//     if(!data.name)return res.sendStatus(400)
//     try{
//         const newCategory = await createCategory(data)
//         return res.json(newCategory)
//     }catch(e){
//         return res.status(400).send(e)
//     }
// })
module.exports = router;
