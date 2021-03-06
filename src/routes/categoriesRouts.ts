const express=require('express')
const categoriesControllers= require('../controllers/categoriesController')
const categoriesRouter=express.Router()
const authController = require('../controllers/authController')

categoriesRouter.route('/')
    .get(categoriesControllers.getAllCategories)
    .post(authController.protect,categoriesControllers.createNewCategory)
    //.patch(categoriesControllers.updateCategory)
// categoriesRouter.route('/translate')
//     .post(categoriesControllers.addTranslate)
//     .get(categoriesControllers.getTranslate)

categoriesRouter.route(`/:name`)
    .get(categoriesControllers.getCategory)
    .patch(categoriesControllers.updateCategory)
    .delete(categoriesControllers.deleteCategory)
export default categoriesRouter
