const mongoose=require('mongoose')

const user=mongoose.model('User',{
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    dob:{
        type:String 
     },
    userName:{
        type:String,
    },
    password:{
        type:String
    }
    

})

module.exports=user