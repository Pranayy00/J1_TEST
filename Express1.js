const express=require("express");
const path=require("path")
    const app=express();
    app.use(express.json());

    app.use(express.urlencoded({extended:true}));

    app.get("/",(req,res)=>{
        res.sendFile(path.join(__dirname,"views","form.html"))
    });

    app.post("/form",(req,res)=>{
        const data=req.body;
    console.log(data);
    res.json(data);
    });
    app.listen(5000,()=>{
        console.log("Running....");
        
    });



