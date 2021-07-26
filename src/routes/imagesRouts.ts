import categoriesRouter from "./categoriesRouts";

const express=require('express')
const imagesRouter=express.Router()
const imagesControllers= require('../controllers/imagesControlles')

imagesRouter.route('/')
  //  .get(imagesControllers.getImage)
    .post(imagesControllers.addImage)
imagesRouter.route(`/:word`)
    .get(imagesControllers.getImage)
    .patch(imagesControllers.updateImage)
   // .delete(categoriesControllers.deleteCategory)
export default imagesRouter
