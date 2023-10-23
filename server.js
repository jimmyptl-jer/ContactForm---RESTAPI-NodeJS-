import express from 'express'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'

import connectDB from './src/config/db.js'
import contactRoutes from './src/routes/contactRoutes.js'

dotenv.config()

// Establish a connection to the MongoDB database
connectDB();

const app = express()

// Define the port where the server will listen (use the provided PORT or default to 5000)
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

//Serving Static Files
app.use(express.static('public'))

app.use('/contact',contactRoutes)

app.get('/',(req,res)=>{
  res.send('Server is ready')
})

app.listen(PORT,()=>{
  console.log(`Server is running on ${PORT}`)
});