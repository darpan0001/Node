const http = require('http');
http.createServer(function (req, res){
        res.write('Hare Krishan'); //write a response to the client
        res.end(); //end the response
}).listen(8080);


