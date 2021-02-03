const mongoose=require('mongoose')

const product=mongoose.model('Product',{
    productName:{
        type:String,
        required:true
    },
    productType:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productImage:{
        type:String,
        required:true
    }

})
module.exports=product