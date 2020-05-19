var express=require('express');
var cors =require('cors');
var bodyParser=require('body-parser');
var app=express();
const mongoose=require('mongoose');

const dotenv = require("dotenv");
dotenv.config();


var port=5000||process.env.PORT;

const path = require("path");

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)

console.log(process.env.port);

/* const mongoURI='mongodb+srv://devikTech:9931320688v@cluster0-koncr.mongodb.net/test?retryWrites=true&w=majority';  */

const mongoURI=process.env.mongoURI;

console.log(mongoURI)


mongoose.connect(
  mongoURI,
    {
        useNewUrlParser:true
    }
).then(()=>console.log('MongoDb Connected')).catch(err=>console.log(err))

console.log(process.env.NODE_ENV)

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