import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import connectDB from './config/db.js';
import userRouter from './routes/userroutes.js';

const PORT=4000 || process.env.PORT

const app=express();
await connectDB()



app.use(express.json());

app.use('/api/user',userRouter);


app.get('/',(req,res)=>{
    res.send("Api working");
})

app.listen(PORT,()=>{
    console.log("Server running on port "+PORT);
})