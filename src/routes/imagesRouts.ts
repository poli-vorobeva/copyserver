const express=require('express')
const imagesRouter=express.Router()
const imagesControllers= require('../controllers/imagesControlles')

imagesRouter.route('/')
    .get(imagesControllers.getImage)
    .post(imagesControllers.addImage)

export default imagesRouter
