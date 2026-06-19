

const mongoose=require("mongoose");



//create schema

const empSchema=mongoose.Schema({
    name:{
        type:String,
        lower:true,
        min:3,
        required:true
    },

    course:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true

    },
    rollno:{
        type:Number,
        required:true
    }
    

});

//create model

const empModel=new mongoose.model("emp1",empSchema);
connectDB();

//http method

const express=require("express");
const { connectDB } = require("./db");


const app=express();
app.use(express.json());

//show data

app.get("/viewData",async (req,res)=>{
    try {
         const result=await empModel.find(); 
         res.json(result);

    } catch (error) {
        console.log(error);

        
    }
});


//add Data

app.post("/addData",(req,res)=>{
    try {
       const data=new empModel({
        name:req.body.name,
        course:req.body.course,
        email:req.body.email,
        rollno:req.body.rollno


        });
        const result=data.save();
        res.json(result);
    } catch (error) {
        console.log(error);
        
        
    }
});

//update data
app.post("/updateData/:id", async (req,res)=>{
   try {
    const result= empModel. findByIdAndUpdate(req.params.id,req.body,{new:true});
     res.json(result);
   } catch (error) {
    console.log(error);
    
    
   }

});
//delet by id
app.post("/deletData/:id", async (req,res)=>{
   try {
    const result= empModel. findByIdAndDelete(req.params.id);
     res.json(result);
   } catch (error) {
    console.log(error);
    
    
   }

});


