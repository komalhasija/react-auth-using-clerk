import dotenv from 'dotenv/config'
import cors from 'cors'
import express from 'express'
import connectDB from './config/db.js';

const app=express();
await connectDB()

const PORT=4000 || process.env.PORT

app.use(express.json());
app.use(cors);

app.get('/',(req,res)=>{
    res.send("Api working");
})

app.listen(PORT,()=>{
    console.log("Server running on port"+PORT);
})