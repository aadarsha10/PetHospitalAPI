const express=require('express')
const cors = require('cors')
var app=express()
app.use(cors())
app.use(express.json())
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))

const db=require('./database/db')
const user_route=require('./route/user_route')
const petRoute=require('./route/pet_route')
const booking_route=require('./route/booking_route')
app.use(user_route)
app.use(petRoute)
app.use(booking_route)


//start to listen to requests from port 90
app.listen(90)