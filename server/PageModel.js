const mongoose=require('mongoose')
const pageSchema=new mongoose.Schema({
    ptitle:{
        type:String
    },
    pdescription:{
        type:String
    },
    img:{
        type:String
    }
})
module.exports=mongoose.model('pages',pageSchema)