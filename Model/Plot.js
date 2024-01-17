const mongoose=require("mongoose")

let sc=mongoose.Schema;
const plotschema = new sc({
    Admno:String,
    Pname:String,
    Price:Number,
    Cno:Number,
    Status:String
});

var plotmodel =mongoose.model("Plot",plotschema)
module.exports =plotmodel;
