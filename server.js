const port=8000;

//including express , cors and body-parser packages in my server 
const express= require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('website'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// create a server
const server = app.listen(port, ()=>{
  console.log(`server running on http://localhost:${port}/`); })

//  adding post route to add the content to JSObject
  let JSObject = {};
  app.post('/add',(req,res)=> {
    data=req.body
    JSObject.temp=data.temp
    JSObject.zip=data.zip
    JSObject.feeling=data.feeling
    JSObject.date=data.date
  })

  // adding get route that returns project data object  
 app.get('/all', (req,res)=>{
    res.send(JSObject)
     })
 
  
 
