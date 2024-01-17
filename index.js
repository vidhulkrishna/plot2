const express = require("express");
const cors = require("cors")
// const PlotRouter = require('./Routes/Plotroutes')
// const DocumentsRouter = require('./Routes/documents')
const db = require("./Connection/Database")


const app = new express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());




app.get('/', (request, response) => {
    response.send("hi database")
})

// app.use("/plot", PlotRouter)

// app.use("/documents", DocumentsRouter)


app.listen(4005, (request, response) => {
    console.log("Port is running in 4005")
})