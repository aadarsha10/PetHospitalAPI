const mongoose=require('mongoose')

const pet=mongoose.model('Pet',{
    petName:{
        type:String,
        required:true 
    },
    petAge:{
        type:String,
        required:true 
     },
    petType:{
        type:String,
        required:true
    },
    petBreed:{
        type:String  
    },
    petGender:{
        type:String
    },
    petMedicalHistory:{
        type:String
    },
    userName:{
        type: String,
        required:true
    }
    
})

module.exports=pet  