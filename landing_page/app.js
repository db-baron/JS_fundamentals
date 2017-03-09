// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // This is how we do routing.
    // if the request URL matches the root route, then serve the appropriate response.
    if(request.url === '/') {
        // fs.readFile finds 'index.html' and reads it.  The second parameter is the type of characters to expect in the file it's opening.
        // Third parameter is the callback which gets the file contents passed in and is where we formulate and serve the response
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // sends the headers for our response along with a status code.
            response.write(contents);  //  response.write() method sends the contents of the files to the client.
            response.end(); // finished!
        });
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to listen/run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
