var express=require('express');
var cors =require('cors');
var bodyParser=require('body-parser');
var app=express();
const mongoose=require('mongoose');
var port=process.env.PORT||5000;

const path = require("path");

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)
const mongoURI='mongodb+srv://devikTech:9931320688v@cluster0-koncr.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(
    mongoURI,
    {
        useNewUrlParser:true
    }
).then(()=>console.log('MongoDb Connected')).catch(err=>console.log(err))


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build")); // change this if your dir structure is different
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }
 


var routes = require('./routes/routes')
app.use('/routes',routes)

app.listen(port,function(){
    console.log('server is running a port:'+port)
})