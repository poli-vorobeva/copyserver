import express, { Request, Response } from 'express';
import {json} from 'body-parser'
import categoriesRouter from "../routes/categoriesRouts";
import userRouter from "../routes/userRouts";
const mongoose = require('mongoose')
const fs = require('fs')
const app = express()
const PORT : string|number = process.env.PORT || 5000;
const cors = require('cors')

//const categories = JSON.parse(fs.readFileSync(`${__dirname}/Categories.json`))

// app.use(bodyParser.json())
app.use(cors())
app.use(json())
//app.use(bodyParser.json())

 //'этот путь будет обрабатываться роутером категорий'
app.use('/api/categories', categoriesRouter);
app.use('/api/users',userRouter)
//
// testCategory.save().then((doc:Request)=>{
//     console.log("DOC",doc)
// }).catch((err:Error)=> {console.log('EERRORR',err)})

mongoose.connect('mongodb+srv://poli8512:a111222y@cluster0.zlz6u.mongodb.net/english',
        {
         useNewUrlParser:true,
         useCreateIndex:true,
         useFindAndModify:false,
         useUnifiedTopology: true
        }).then(()=>console.log('Connected')).catch((e:Error)=>console.log(e))
// //app.use('/')
    app.listen(PORT);
