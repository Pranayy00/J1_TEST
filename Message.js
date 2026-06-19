// const os =require("os");

// console.log(os.arch());
// console.log(os.availableParallelism());
// console.log(os.cpus());
// console.log(os.endianness());
// console.log(os.freemem());


const fs=require("fs");

fs.readFile("./text.txt",(err,data)=>{
    if (err) {
        console.log(err);

        
        
    } else {
        console.log(data.toString());
        
        
    }

});

const data1="\n user5678";

fs.writeFile("./test.txt",(err,data)=>{
    if (data) {
        console.log(data);
        
        
    } else {
    console.log(err);
            
    }
});


const data="\n user 123"
fs.appendFile("./text.txt",data,(err)=>{
    if (err) {
        console.log(err);
        
        
    } else {
        console.log("data added..");
        
        
    }

});

fs.unlink("./text.txt",(err)=>{
    if (err) {
        console.log(err);
        
        
    } else {
        console.log("file deleted...");
        
        
    }
    

});

fs.mkdir("./folder",(err)=>{
    if (err) {
        console.log(err);
        
        
    } else {
        console.log("folder created...");
        
        
    }
})

fs.rmdir("./folder",(err)=>{
    if (err) {
        console.log(err);
        
        
    } else {
        console.log("folder deleted sucessfully...");
        
        
    }
});










