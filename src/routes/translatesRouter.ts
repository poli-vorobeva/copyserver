const express=require('express')
const translatesRouter=express.Router()
const translatesControllers= require('../controllers/translateControllers')

translatesRouter.route('/')
    //  .get(imagesControllers.getImage)
    .post(translatesControllers.addTranslate)
translatesRouter.route(`/:word`)
    .get(translatesControllers.getTranslate)
// .patch(categoriesControllers.updateCategory)
// .delete(categoriesControllers.deleteCategory)
export default translatesRouter
