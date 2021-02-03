const express=require('express')
const router=express.Router()
const authenticate=require('../middleware/authenticate')   //providing path for authenticate.js
const pet = require('../models/pet_model')// pet model location (auto import)

//for inserting liquor items
router.post('/pet/insert',function(req,res){
    const petName=req.body.petName
    const petAge=req.body.petAge
    const petType=req.body.petType
    const petBreed=req.body.petBreed
    const petMedicalHistory=req.body.petMedicalHistory

    const petData=new pet({
        petName:petName,
        petAge:petAge,
        petType:petType,
        petBreed:petBreed,
        petMedicalHistory:petMedicalHistory})//params for pet data insertion into database
    
        petData.save().then(function(result){
        res.status(201).json({message:"Pet Registered Successfully."})
    })
    .catch(function(e){
        res.status(500).json({message:e})
    })

})

router.delete('/pet/delete/:petId',function(req,res){
    const pet_id=req.params.petId
    pet.deleteOne({_id:pet_id})
    .then(function(result){
        res.status(200).json({message:"Product deleted successfully",status:"true"})
    })
    .catch(function(err){
        res.status(500).json({message:err,status:"false"})
    })
})

module.exports=router