// Set up a few static html pages that will be serviced by our node server when certain urls are hit
var fs = require('fs'),
    http = require('http'),
    port = 5000;

var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            if (error) { console.log(error)};
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    if(request.url === '/ninjas') {
        fs.readFile('ninjas.html', 'utf8', function (errors, contents){
            if (errors) { console.log(errors)};
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    if(request.url === '/dojos/new') {
        fs.readFile('dojos.html', 'utf8', function (errors, contents){
            if (errors) { console.log(errors)};
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else{
        response.writeHead(404);
        response.end("File Note Found");
        console.log("Could not find file");
    }
});
// tell your server which port to listen/run on
server.listen(port, function(){
    console.log("Running in localhost at port", port);
});
