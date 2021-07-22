const mongoose = require('mongoose')

const CategoriesSchema = mongoose.Schema({
   // id:Number,
   //  path:{
   //      type:String,
   //      required:[true,'Category must have a name']
   //  },
    name:{
        type:String,
        required:[true,'Category must have a name'],
        unique:true
    },
    images:{
        type:Array,
        required:[true,'Category must have an images']
    },
    title:{
        type:String,
        required:[true,'Category must have a name'],
        unique:true
    }
})
const Category= mongoose.model('Category',CategoriesSchema)
// const testCategory= new Category({
//     name:"Test Category",
//     path:'test',
//     id:99,
//     images:['cat','dog','milk']
// })
export default Category
