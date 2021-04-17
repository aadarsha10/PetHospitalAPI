const express=require('express')
const router=express.Router()
const authenticate=require('../middleware/authenticate')   //providing path for authenticate.js
const pet = require('../models/pet_model')// pet model location (auto import)

const auth = require('../middleware/authenticate') //authenticate page routing 
const upload = require('../middleware/image_upload') //routing to upload.js

//for inserting Pet details

router.post('/pet/insert',function(req, res){
    
    console.log(req.file)//to fetch file info 

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
        userName:userName,
        })//params for pet data insertion into database
    
        petData.save().then(function(){
        res.status(201).json({message:"Pet Registered Successfully."})
    })
    .catch(function(e){
        res.status(500).json({message:e})
    })

})

router.delete('/pet/delete/:petId',function(req,res){
    const pet_id=req.params.petId
    pet.deleteOne({_id:pet_id})
    .then(function(){
        res.status(200).json({message:"Pet details deleted successfully",success:true})
    })
    .catch(function(err){
        res.status(500).json({message:err,status:"false"})
    })
})


router.put('/pet/updatePet/:petId',auth.checkUser, function(req,res){
    const pid=req.body.petId;
    const pName=req.body.petName;
    const pAge=req.body.petAge;
    const pBreed=req.body.petBreed;
    const pMedicalHistory=req.body.petMedicalHistory;
    const pImage=req.body.petImage;
    
    
    pet.updateOne({_id:pid},{petName:pName, petAge:pAge, petBreed:pBreed, petMedicalHistory:pMedicalHistory, petImage:pImage})
    .then(function(){
        console.log("updated")
        res.status(200).json({message : "Updated!"})
    })
    .catch(function(e){
        res.status(500).json({message : e})
    })
})

//Read all
  

//Read 
router.post('/pets/user', function(req,res){
     const uname = req.body.username   
    pet.findOne({userName : uname}).then(function(data){
        res.status(200).json({message:"data fetched", petData: data})
    })
    .catch(function(e){ 
        res.status(500).json({ message : e})
    })
})



//Image Upload


module.exports=router