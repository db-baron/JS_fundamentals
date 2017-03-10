var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
    // serveHTML('cats.html', response);
    // console.log("WWWWW", request.url);
    var splitURL = request.url.split('/');
    var spliturl_index1 = splitURL[1];
    console.log("splitURL[1] is:", spliturl_index1);

    // swtich is cleaner than if/else statements
    switch(spliturl_index1) {
        case "styles": // for CSS
            serveCSS(splitURL[2], response);
            break;
        case "images": // for images
            serveJPG(splitURL[2], response);
            break;
        default:  // for HTML
            // Another switch statement for if the spliturl_index1 has another level
            switch (splitURL[1]){
                case "cats":
                    serveHTML("cats.html", response);
                    break;
                case "cars":
                    if(splitURL[2] === "new") {
                        serveHTML("new.html", response);
                    } else {
                        serveHTML("cars.html", response);
                    }
                    break;
                default:
                    serve404(response);
            }
    }

});

// We call on these help functions, giving each the response object (and filename in most cases) to serve the correctly-configred response.
// If any callback gets an error, meaning the file wasn't found, we serve 404!

function serveHTML(filename, response){
  // Read the file 'filename'
  fs.readFile("views/" + filename, 'utf8', function(error, contents){
    // Check if an error exists
    if (error) {
        return serve404(response)
    }
    // Respond to the browser's request
    else {
        response.writeHead(200, {'Content-type' : 'text/html' });
        response.write(contents);  // contents of the file we just read
        response.end();
    }
  });
}

function serveCSS(filename, response){
  // Read a style file
  fs.readFile("stylesheets/" + filename, 'utf8', function(error, contents){
    // Check if an error exists
    if (error) {
        return serve404(response)
    }
    // Respond to the browser's request
    else {
        response.writeHead(200, {'Content-type' : 'text/css' });
        response.write(contents);  // contents of the file we just read
        response.end();
    }
  });
}

function serveJPG(filename, response){
  // Read a image file
  fs.readFile("images/" + filename, function(error, contents){
    // Check if an error exists
    if (error) {
        return serve404(response)
    }
    // Respond to the browser's request
    else {
        response.writeHead(200, {'Content-type' : 'image/jpg' });
        response.write(contents);  // contents of the file we just read
        response.end();
    }    
  });
}

function serve404(response){


}

server.listen(7077);
console.log("Running on 7077");
