//This work space is used for web socket that is used for live chatting.

var express = require('express');
var http = require('http');
const socketIO = require('socket.io');


var app = express();
let server = http.createServer(app)
var io = socketIO(server);


let user=0
 
io.on('connection', function(socket)
{
    user++;

    console.log("user is connected,total user is" + user);

      //setTimeout(function()
    //{
        //socket.send('Sent a message 4seconds after connection!');

        socket.emit('socketData', //Sending Json Data to client side.
        {description: 'This massage is receiving from server side'}); 

    //},4000);

        socket.on('dataSocket', //Receiving Data from client side.
        (newMessage) => {
        console.log('newMessage', newMessage);

        socket.broadcast.emit('newMessage', //Broadcaste message received from client and forward to other clients.
        {description: 'This massage is receiving from other clients ' + newMessage.text });
        });

        socket.on('disconnect',function()
        {
            user--;
            console.log("a user is disconnected,total remaining user is" + user)
        })
  
})

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/index.html");
});

server.listen(8080, () => {
    console.log(`Server running on port 8080`);
});