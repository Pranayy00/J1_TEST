const mongoose=require("mongoose");
const connectDB=()=>{
    mongoose.connect("mongodb+srv://pranaywawalkar2005_db_user:<Pranay@1812>@cluster0.yygyjhv.mongodb.net/?appName=Cluster0")

.then((result) => {
    console.log(result);
    
    
}).catch((err) => {
    console.log(err);
    
});
    
}
connectDB()
module.exports={connectDB};