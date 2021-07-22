const mongoose = require('mongoose')

const TranslateSchema = mongoose.Schema({
    word:{
        type:String,
        unique:true
    },
    translate:{
        type:String,
    }
})
const Translate= mongoose.model('Translate',TranslateSchema)
export default Translate
//
// {
//     word: "ride",
//         translate:"кататься"
// }
