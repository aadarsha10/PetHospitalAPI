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
        type:String,
        required:true
    },
    petBreed:{
        type:String  
    },
    petMedicalHistory:{
        type:String
    },
    petImage:{
        type:String,
        default: "no-photo.jpg"
    }
    ``
})

module.exports=pet