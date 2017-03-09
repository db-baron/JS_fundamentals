// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// Creating a server using http module:
// Whatever we put inside the function gets executed when a client sends a http request to the NodeJS server,
//    i.e. we execute the function passed in the createServer method and pass two variables to this function.
//      -The request variable would contain information about the http request made (who it is, browser info, etc)
//      -The response variable would have methods/properties you can access to render different response types back to the client.
var server = http.createServer(function (request, response){
    // To see what URL the client is requesting:
    console.log('client request URL: ', request.url);
    // This is how we do routing.
    // If the request URL matches the root route, then serve the appropriate response.
    if(request.url === '/') {
        // fs.readFile finds 'index.html' and reads it.  The 'utf8' parameter is the type of characters to expect in the file it's opening.
        // Third parameter is the callback which gets the file contents passed in and is where we formulate and serve the response
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // sends the headers for our response along with a status code.
            response.write(contents);  //  response.write() method sends the contents of the files to the client.
            response.end(); // finished!
        });
    }
    // If request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to listen/run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
