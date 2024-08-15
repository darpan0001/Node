//This work space is used for ejs and all other API's deploy on the local host.

var express = require('express');
const path=require("path");
const cors=require('cors');
const indexRouter=require('./router/index');

var app = express();


app.use (cors());
app.use(express.json());//to understand the json file receiving from postman
app.use('/imageStore',express.static(path.join(__dirname, 'imageStore'))); 
app.use('/',indexRouter);
 
//  app.use("/imageStore",express.static(__dirname + '/imageStore'));
 app.set('view engine', 'ejs');
 app.set("views",path.join(__dirname,"views"))


 app.listen(8081, () => {
     console.log(__filename)
     console.log(`Server running on port 8081`);
 });



