import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';


const app = express();
const PORT = 5000;

//db connection
const connectDB = async()=>{
    await mongoose.connect('mongodb://localhost:27017/First-Task').then(()=>console.log('DB connected'));
}

//database schema
const ContactSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true}
})
//usermodel
const userModel = mongoose.models.user || mongoose.model("user",ContactSchema);


const addUser = async (req,res) =>{
    const user = new userModel({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
    })
    try {
        await user.save();
        res.json({success:true,message:"User Data added Successfuly"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"error occured"});
    }
}

app.use(express.json())
app.use(cors())
connectDB();

const userRoute = express.Router();

userRoute.post('/add',addUser)

app.use("/user",userRoute)

app.get('/',(req,res)=>{
    res.send("Api Working")
})

app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
})