const express=require("express");

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({message:"home page"})
});

app.post("/form",(req,res)=>{
    const data=req.body
    res.json(data);
})