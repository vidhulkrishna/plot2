const mongoose=require("mongoose")



let sc=mongoose.Schema;
const docschema = new sc({
    sid:{type:mongoose.Schema.Types.ObjectId,ref:'plots'},
    documents:String,
    certphoto:{
        data : Buffer,
        contentType:String,
    }
    
});

var docmodel =mongoose.model("documents",docschema)
module.exports =docmodel;