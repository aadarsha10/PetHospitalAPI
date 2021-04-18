const express=require('express')
const cors = require('cors')
const app=express()
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
app.use(cors())

//start to listen to requests from port 90
app.listen(90)
// app.use(errorHandler);

// const PORT = process.env.PORT || 90;

// // In order to run the server we need to call listen
// const server = app.listen(
//     PORT,
//     console.log(
//       `Server running in mode : ${process.env.NODE_ENV},on port : ${PORT}`.yellow
//         .bold
//     )
//   );

//   //Handle unhandled promise rejections , change the password in the env file and check and throw error message.
// process.on("unhandledRejection", (err, promise) => {
//     console.log(`Error connecting database : ${err.message}`.red);
//     //close server and exit process
//     server.close(() => process.exit(1));
//   });
  