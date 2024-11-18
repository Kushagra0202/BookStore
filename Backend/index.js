import express, { request, response } from "express";
import { port , mongoDBURL } from "./config.js"
import mongoose from 'mongoose'
import { Book } from "./models/bookmodels.js";
import booksRoute from './routes/booksRoute.js';
import cors from 'cors'

const app = express();

app.use(express.json());

app.use(cors())

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('Welcome to MERN stack tutorial');
})


app.use('/books',booksRoute)



mongoose.connect(mongoDBURL).then(()=>{
   console.log("App connected to Database")
   app.listen(port ,()=>{
    console.log("App is running...");
 })
}).catch((error)=>{
   console.log(error);
})

