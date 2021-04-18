const mongoose=require('mongoose')

const booking=mongoose.model('Booking',{
    pname:{
        type:String,
        required:true 
    },
    userName:{
        type:String,
        required:true
        
    },
    pcondition:{
        type:String,
        
    },
    date:{
        type:String,
        required:true 
    },
    time:{
        type:String,
        required:true 
    },
    reason:{
        type:String
    }
    
})

module.exports=booking