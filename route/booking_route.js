const express=require('express')
const router=express.Router()
const authenticate=require('../middleware/authenticate')   //providing path for authenticate.js
const pet = require('../models/pet_model')// pet model location (auto import)

const auth = require('../middleware/authenticate') //authenticate page routing 
const upload = require('../middleware/image_upload') //routing to upload.js

//for inserting Pet details

router.post('/booking/user',function(req, res){
    

    const petname=req.body.pname
    const petAge=req.body.age
    const petType=req.body.type
    const petBreed=req.body.breed
    const petGender = req.body.gender
    const petMedicalHistory=req.body.existingHealthCondition
    const userName=req.body.relatedUserName

    const bookingdata=new booking({
        petName:petName,
        petAge:petAge,
        petType:petType,
        petBreed:petBreed,
        petGender : petGender,
        petMedicalHistory:petMedicalHistory,
        userName:userName
        })//params for pet data insertion into database
    
        petData.save().then(function(){
        res.status(201).json({message:"Pet Registered Successfully."})
    })
    .catch(function(e){
        res.status(500).json({message:e})
    })

    //Read 
router.post('/booking/update/user', function(req,res){
    const uname = req.body.username  
    console.log(uname) 
   pet.find({userName : uname}).then(function(data){
       res.status(200).json({message:"data fetched", petData: data})
   })
   .catch(function(e){ 
       res.status(500).json({ message : e})
   })
})

})
