const express=require('express')
const router=express.Router()
const authenticate=require('../middleware/authenticate')   //providing path for authenticate.js
const booking = require('../models/booking_model')// pet model location (auto import)

//for inserting Booking details

router.post('/booking/user',function(req, res){
    

    const petname=req.body.petname
    const petcondition=req.body.pcondition
    const phone=req.body.phone
    const date=req.body.date
    const time = req.body.time
    const reason=req.body.reason
    const usrUsername=req.body.usrUserName

    const bookingdata=new booking({
        petname:petname,
        petcondition:petcondition,
        phone:phone,
        date:date,
        time : time,
        reason:reason,
        userName:usrUsername
        })//params for pet data insertion into database
    
        bookingdata.save().then(function(){
        res.status(201).json({message:"Appointment created Successfully."})
    })
    .catch(function(e){
        res.status(500).json({message:e})
    })

    //Read 

})
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
module.exports=router
