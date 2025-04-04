const dotenv=require('dotenv');
dotenv.config();
const express=require('express');
const cors=require('cors');
const connectToDb=require('./db/db');
const userRoutes=require('./routes/user.routes')
const captainRoutes=require('./routes/captain.routes')
connectToDb();
const app=express();
const cookieParser=require('cookie-parser');
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}));
app.get('/', (req,res)=>{
    res.send('Hello World');
})


app.use('/users',userRoutes);
app.use('/captains',captainRoutes);
module.exports=app;