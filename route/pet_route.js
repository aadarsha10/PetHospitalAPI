const express=require('express')
const router=express.Router()
const authenticate=require('../middleware/authenticate')   //providing path for authenticate.js
const pet = require('../models/pet_model')// pet model location (auto import)

const auth = require('../middleware/authenticate') //authenticate page routing 
const upload = require('../middleware/image_upload') //routing to upload.js

//for inserting Pet details

router.post('/pet/insert',upload.single('petImage'),function(req,file, res){
    
    console.log(req.file)//to fetch file info 

    
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
        petMedicalHistory:petMedicalHistory,
        petImage:req.file.path})//params for pet data insertion into database
    
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


router.put('/pet/updatePet/:petId',auth.checkUser, function(req,res){
    const pid=req.body.petId;
    const pName=req.body.petName;
    const pAge=req.body.petAge;
    const pBreed=req.body.petBreed;
    const pMedicalHistory=req.body.petMedicalHistory;
    const pImage=req.body.petImage;
    
    
    pet.updateOne({_id:pid},{petName:pName, petAge:pAge, petBreed:pBreed, petMedicalHistory:pMedicalHistory, petImage:pImage})
    .then(function(result){
        console.log("updated")
        res.status(200).json({message : "Updated!", status:"True"})
    })
    .catch(function(e){
        res.status(500).json({message : e, status:"False"})
    })
})

//Read all
router.get('/pet/all', function(req,res){
        
    pet.find().then(function(data){
        res.status(200).json(data)
    })
    .catch(function(e){
        res.status(500).json({message : e})
    })
})

//Read 
router.get('/pet/single/:petId',auth.checkUser, function(req,res){
     const id = req.params.petId   
    pet.findOne({_id : id}).then(function(data){
        res.status(200).json(data)
    })
    .catch(function(e){
        res.status(500).json({message : e})
    })
})



//Image Upload


module.exports=router