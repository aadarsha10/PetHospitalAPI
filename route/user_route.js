const express=require('express')
const router=express.Router()
const user=require('../models/user_model')

router.post('/registerUser',function(req,res){
    const firstName=req.body.firstName
    const lastName=req.body.lastName
    const dob=req.body.dob
    const userName=req.body.userName   //body.userName vaneko form bata aauni aile chei postman ko
    const email=req.body.email
    const password=req.body.password

    const u1=new user({firstName:firstName,lastName:lastName,dob:dob,userName:userName,email:email,password:password}) //first ko userName vnya database ko second ko chei mathi variable
    u1.save()
})

router.delete('/deleteUser/:id',function(req,res){
    const id=req.params.id    //params.id vnya url bata aauni, same to upper
    user.deleteOne({_id:id}).then(function(){
        console.log("deleted")
    })
})

router.put('/updateUser/:id',function(req,res){
    const uid=req.params.id;
    const uName=req.body.userName
    user.updateOne({_id:uid,userName:uName}).then(function(){
        console.log("updated")
    })
})

module.exports=router   