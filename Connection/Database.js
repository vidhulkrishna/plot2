const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://vidhulkrishnaasatheesh:kart123@cluster0.cs1kjai.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("Db connected")})
.catch(err=>console.log(err));