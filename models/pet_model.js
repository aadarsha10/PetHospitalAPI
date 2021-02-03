const mongoose=require('mongoose')

const pet=mongoose.model('Pet',{
    petName:{
        type:String,
        required:true 
    },
    petAge:{
        type:Number,
        required:true 
     },
    petType:{
        type:String
    },
    petBreed:{
        type:String  
    },
    petMedicalHistory:{
        type:String,
        unique:true,
        required:true 
    },
    productImage:{
        type:String,
        required:true
    }
    
})

module.exports=pet