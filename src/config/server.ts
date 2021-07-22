import express, { Request, Response } from 'express';
import {json} from 'body-parser'
import categoriesRouter from "../routes/categoriesRouts";
import userRouter from "../routes/userRouts";
import translateRouter from "../routes/translateRouts";
import imagesRouter from "../routes/imagesRouts";
const mongoose = require('mongoose')
const fs = require('fs')
const app = express()
const PORT : string|number = process.env.PORT || 5000;
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(cors())
app.use(json())
// app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));
// app.use(bodyParser.raw( {
//     limit: '500000kb'
// }))
//app.use(bodyParser.json({limit: "50mb"}));
//app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
 //'этот путь будет обрабатываться роутером категорий'
app.use('/api/categories', categoriesRouter);
app.use('/api/translates',translateRouter);
app.use('/api/images',imagesRouter);
app.use('/api/users',userRouter);
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
