const express=require('express')
const router=express.Router()
const user=require('../models/user_model')
const {check,validationResult}=require('express-validator') //for validation npm i express-validator --save
const bcryptjs=require('bcryptjs')   //for encryption, done after validation
const jwt=require('jsonwebtoken')   //for token npm i jsonwebtoken --save

const auth = require('../middleware/authenticate') //authenticate page routing 

router.post('/register', function(req,res){
    const errors=validationResult(req)
    
    if(errors.isEmpty()){        //if there is no error
    const firstName=req.body.fname
    const lastName=req.body.lname
    const userName=req.body.username 
    const email=req.body.email
    const password=req.body.password
        console.log(firstName)
        

    bcryptjs.hash(password,10,function(err,hash){   //hash varifies that a file/data hasnot altered.
        const u1= new user({firstName:firstName,lastName:lastName,userName:userName,email:email,password:hash}) //first ko userName vnya database ko second ko chei mathi variable
        console.log(u1)
        
        u1.save()
        .then(function(){ 
            res.status(201).json({success: true, message:"Registered!"})    //showing message in postman/client
        })
        .catch(function(){
            res.status(500).json({success: false, message:err})
        })
    })
   
    }
    else{
        res.status(400).json(errors.array())   //if there is error send errors
    }
   
})

//login system
router.post('/login',function(req,res){
    const userName=req.body.username
    const password=req.body.password   //user provided password
    //we need to find if user exists
    user.findOne({userName:userName})    //first variable userName is from user_model while the second is created here
    .then(function(userData){
        if(userData===null){
            return res.status(403).json({success: false, userData:null})
        }
        //username is correct
        bcryptjs.compare(password,userData.password,function(err,result){ //first password is variable and another is db password
            if(result===false){
                return res.status(403).json({success:false, message : "Invalid username or password!"})
            }
            // res.send("Correct")
            const token=jwt.sign({userId:userData._id},'secretkey')  //providing token
            res.status(200).json({
                success:true,
                token:token,
                Username:userData.userName,
                Email:userData.email,
                Lastname:userData.lastName,
                Firstname:userData.firstName

            })
            

        })
    })
    .catch(function(err){
        res.status(500).json({message:err})
    })  
})
router.delete('/deleteUser/:id',function(req,res){
    const id=req.params.id    //params.id vnya url bata aauni, same to upper
    user.deleteOne({_id:id}).then(function(){
        console.log("deleted")
        res.status(200).json({message : "Deleted!", status:"True"})
    })
    .catch(function(e){
        res.status(500).json({message : e, status:"False"})
    })
})

router.put('/update',function(req,res){
    const username=req.body.username
    console.log(username)
    const email=req.body.email
    user.updateOne({userName:username,email:email}).then(function(){
        console.log("updated")
        res.status(200).json({message : "updated", updateEmail : email})
    })
    .catch(function(e){
        res.status(500).json({message : e, status:"False"})
    })
})

module.exports=router   