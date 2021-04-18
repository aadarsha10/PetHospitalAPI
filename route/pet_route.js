const express=require('express')
const router=express.Router()
const authenticate=require('../middleware/authenticate')   //providing path for authenticate.js
const pet = require('../models/pet_model')// pet model location (auto import)
const mongoose=require('mongoose')

const auth = require('../middleware/authenticate') //authenticate page routing 
const upload = require('../middleware/image_upload') //routing to upload.js

//for inserting Pet details

router.post('/pet/insert',function(req, res){
    

    const petName=req.body.pname
    const petAge=req.body.age
    const petType=req.body.type
    const petBreed=req.body.breed
    const petGender = req.body.gender
    const petMedicalHistory=req.body.existingHealthCondition
    const userName=req.body.relatedUserName

    const petData=new pet({
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

})

router.delete('/pet/delete/:id',function(req,res){
    const pet_id=req.params.id
    console.log(pet_id)
    pet.findByIdAndDelete({_id:pet_id})
    .then(function(){
        res.status(200).json({message:"deleted"})
    })
    .catch(function(err){
        res.status(500).json({message:err,status:"false"})
    })
})


router.put('/pet/updatePet', function(req,res){
    const username=req.body.username;
    const pName=req.body.petName;
    const pAge=req.body.petAge;
    const pBreed=req.body.petBreed;
    const pMedicalHistory=req.body.petMedicalHistory;
    const petGender = req.body.petGender
    const petType = req.body.petType


    
    pet.updateOne({userName: username},{petName:pName, petAge:pAge, petBreed:pBreed, petMedicalHistory:pMedicalHistory, petGender : petGender, petType : petType})
    .then(function(){
        console.log("updated")
        res.status(200).json({message : "updated"})
    })
    .catch(function(e){
        res.status(500).json({message : e})
    })
})

//Read all
  

//Read 
router.post('/pets/user', function(req,res){
     const uname = req.body.username  
     console.log(uname) 
    pet.find({userName : uname}).then(function(data){
        res.status(200).json({message:"data fetched", petData: data})
    })
    .catch(function(e){ 
        res.status(500).json({ message : e})
    })
})

router.delete('/pet/delete',function(req,res){
    // const id=req.params._id.toString().trim() //params.id vnya url bata aauni,
    // const reqId = req.body.item_id
    // console.log(reqId)x
    const id = mongoose.Types.ObjectID(req.body.item_id)
    
    console.log(id)
    
    pet.findByIdAndDelete({_id : id}, function(){
    res.status(200).json({
    message : "deleted",
    })
})
})



//Image Upload


module.exports=router