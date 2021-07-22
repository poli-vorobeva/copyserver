const express=require('express')
const translateRouter=express.Router()
const translateControllers= require('../controllers/translateControllers')

translateRouter.route('/')
    .post(translateControllers.addTranslate)
    .get(translateControllers.getTranslate)

export default translateRouter
