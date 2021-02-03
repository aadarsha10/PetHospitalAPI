const express=require('express')
const app=express()
app.use(express.json())
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))

const db=require('./database/db')
const user_route=require('./route/user_route')
const productRoute=require('./route/productRoute')
const petRoute=require('./route/pet_route')
app.use(user_route)
app.use(productRoute)
app.use(petRoute)

//start to listen to requests from port 90
app.listen(90)