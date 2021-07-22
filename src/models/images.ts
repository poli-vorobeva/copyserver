const mongoose = require('mongoose')

const ImageSchema = mongoose.Schema({
    word:{
        type:String,
        required:[true],
        unique:true
    },
    base64:{
        type:String
    }
})
const Image= mongoose.model('Image',ImageSchema)

export default Image
