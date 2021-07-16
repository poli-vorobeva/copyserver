const express=require('express')
const categoriesControllers= require('../controllers/categoriesController')
const categoriesRouter=express.Router()

categoriesRouter.route('/')
    .get(categoriesControllers.getAllCategories)
    .post(categoriesControllers.createNewCategory)

categoriesRouter.route(`/:path`)
    .get(categoriesControllers.getCategory)
    .patch(categoriesControllers.updateCategory)
    .delete(categoriesControllers.deleteCategory)

export default categoriesRouter
