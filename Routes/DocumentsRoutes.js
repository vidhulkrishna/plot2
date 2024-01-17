const certmodel = require("../model/certdetails");
const app = require('express').Router()
const multer = require('multer');

const storage = multer.memoryStorage(); // Store images in memory
const upload = multer({ storage: storage });

// For saving certificatedetails
app.post('/docnew', upload.single('certphoto'), async (request, response) => {
    try {
                const { pid, documents } = request.body
                const newdata = new docmodel({
                    pid,
                    documents,
                    certphoto: {
                        data: request.file.buffer,
                        contentType: request.file.mimetype,
                    }
                })
                await newdata.save();
                res.status(200).json({ message: 'documents added successfully' });
        }
    catch (error) 
    {
                response.status(500).json({ error: 'Internal Server Error' });
    }
}
)


//For Certificate view

app.get('/docdetails', async (request, response) => {

    const result = await docmodel.aggregate([
      {
        $lookup: {
          from: 'plot', // Name of the other collection
          localField: 'pid', // field of item
          foreignField: '_id', //field of category
          as: 'plot',
        },
      },
    ]);
  
    response.send(result)
  })
module.exports = app