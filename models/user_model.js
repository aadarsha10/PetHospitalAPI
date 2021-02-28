const mongoose=require('mongoose')

const user=mongoose.model('User',{
    firstName:{
        type:String,
        required:true 
    },
    lastName:{
        type:String,
        required:true,
      
    },
    userName:{
        type:String,
        unique:true,
        required:true,
        
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true
        
    },
    password:{
        type:String,
        unique:true,
        required:true 
    }
    
})

module.exports=user