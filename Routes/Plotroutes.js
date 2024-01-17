const app = require('express').Router()
const plotmodel = require("../model/plots");


//For Saving student data

app.post('/pnew',(request,response)=>{
    new plotmodel(request.body).save();
    response.send("Record saved Sucessfully")
})

//For retriving student data
app.get('/pview',async(request,response)=>{
    var data = await plotmodel.find();
    response.send(data)
})

//For update status of student -delete
app.put('/updatestatus/:id',async(request,response)=>{
    let id = request.params.id
    await plotmodel.findByIdAndUpdate(id,{$set:{Status:"INACTIVE"}})
    response.send("Record Deleted")
})

//For modifing the details student
app.put('/pedit/:id',async(request,response)=>{
    let id = request.params.id
    await plotmodel.findByIdAndUpdate(id,request.body)
    response.send("Record updated")
})

module.exports = app