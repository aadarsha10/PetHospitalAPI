const mongoose=require('mongoose')

const admin=mongoose.model('Admin',{
    name:{
        type:String,
        required:true 
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
        lowercase:true,
        uppercase:true
        
    },
    password:{
        type:String,
        unique:true,
        required:true 
    }
    
})

module.exports=admin