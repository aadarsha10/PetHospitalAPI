const mongoose=require('mongoose')

const booking=mongoose.model('Booking',{
    petname:{
        type:String,
        required:true 
    },
    userName:{
        type:String,
        required:true
        
    },
    petcondition:{
        type:String,
        
    },
    phone:{
        type:String
    },
    date:{
        type:String,
        required:true 
    },
    time:{
        type:String
    },
    reason:{
        type:String
    }
    
})

module.exports=booking