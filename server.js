var express=require('express');
var cors =require('cors');
var bodyParser=require('body-parser');
var app=express();
const mongoose=require('mongoose');

const dotenv = require("dotenv");
dotenv.config();


app.set('port', process.env.PORT || 5000);

const path = require("path");

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended:false
    })
)

console.log(process.env.port);


const mongoURI=process.env.mongoURI;


mongoose.connect(
  mongoURI,
    {
        useNewUrlParser:true
    }
).then(()=>console.log('MongoDb Connected')).catch(err=>console.log(err))

console.log(process.env.NODE_ENV)
app.use(express.static('./client/build'));


var routes = require('./routes/routes')
app.use('/routes',routes)

app.get("*", (req, res) => {
   res.sendFile(path.resolve(__dirname, "client", "build",     
   "index.html"));
});


/*if (process.env.NODE_ENV === "production") {
    app.use(express.static("./client/build")); // change this if your dir structure is different
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
  }
*/
 


module.exports = app;

app.listen(app.get('port'),function(){
    console.log('server is running a port:'+app.get('port'))
})