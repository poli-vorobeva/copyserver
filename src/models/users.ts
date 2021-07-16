import {NextFunction} from "express";

const mongoose = require('mongoose');
const validator=require('validator')
type typeUserSchema={
    [key:string]:string
}
const userSchema: typeUserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please tell your name'
        ]
    },
    email:{
        type:String,
        required:[true,'Please tell your email'
        ],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,'Please privide a valid email']
    },
    photo:String,
    password:{
        type:String,
        requires:[true,'Please provide a password'],
        minlength:6,
        select:false
    },
    // passwordConfirm:{
    //     type:String,
    //     required:[true,'Please confirm your password'],
    //     validate:{
    //        // validator: function(el:String):boolean{
    //        //     console.log(this.password)
    //        // return el === (this.password as string)
    //        //  }
    //     }
    // }
});


const User = mongoose.model("User",userSchema);
module.exports=User;
