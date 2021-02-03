const express=require('express')
const router=express.Router()
const product=require('../models/productModel')
const authenticate=require('../middleware/authenticate')   //providing path for authenticate.js

//for inserting liquor items
router.post('/product/insert',function(req,res){
    const productName=req.body.productName
    const productType=req.body.productType
    const productPrice=req.body.productPrice
    const productImage=req.body.productImage

    const productData=new product({
        productName:productName,
        productType:productType,
        productPrice:productPrice,
        productImage:productImage})
    
    productData.save().then(function(result){
        res.status(201).json({message:"Product Added Successfully."})
    })
    .catch(function(e){
        res.status(500).json({message:e})
    })

})

router.delete('/product/delete/:productId',function(req,res){
    const pid=req.params.productId
    product.deleteOne({_id:pid})
    .then(function(result){
        res.status(200).json({message:"Product deleted successfully",status:"true"})
    })
    .catch(function(err){
        res.status(500).json({message:err,status:"false"})
    })
})

module.exports=router