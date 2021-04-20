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

    const bookingdata= new booking({
        petname: petname,
        petcondition: petcondition,
        phone: phone,
        date: date,
        time : time,
        reason: reason,
        userName: usrUsername
        })//params for pet data insertion into database
    
        console.log(bookingdata)
        bookingdata.save().then(function(){
        res.status(201).json({
            success : true,
            message : "success"
        })

        
    })
    .catch(function(e){
        res.status(500).json({message:e})
    })

    //Read 
})
router.post('/booking/update/user', function(req,res){
    const petname=req.body.petname
    const petcondition=req.body.pcondition
    const phone=req.body.phone
    const date=req.body.date
    const time = req.body.time
    const reason=req.body.reason
    const usrUsername=req.body.usrUserName 
    console.log(uname) 
    booking.updateOne({userName: usrUsername},{petname:petname, petcondition:petcondition, phone:phone, 
        date:date, time : time, reason : reason})
    .then(function(){
        console.log("updated booking")
        res.status(200).json({message : "updated"})
    })
    .catch(function(e){
        res.status(500).json({message : e})
    })
})
//Read 
router.post('/booking/username', function(req,res){
    const uname = req.body.userName  
    console.log(uname) 
   booking.find({userName : uname}).then(function(data){
       res.status(200).json({message:"data fetched", bookingData: data})
   })
   .catch(function(e){ 
       res.status(500).json({ message : e})
   })
})

router.delete('/booking/delete',function(req,res){
    // const id=req.params._id.toString().trim() //params.id vnya url bata aauni,
    // const reqId = req.body.item_id
    // console.log(reqId)x
    const id = mongoose.Types.ObjectID(req.body.user_id)
        
    console.log(id)
    
    pet.findByIdAndDelete({_id : id}, function(){
    res.status(200).json({
    message : "deleted",
    })
})
})
module.exports=router
