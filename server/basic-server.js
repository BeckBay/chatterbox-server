//PS: open two terminals. one use npm install. then npm install -g nodemon. then
//  npm run start:server
//other terminal do npm test to see the tests.


/* Import node's http module: */
var http = require('http');
// ^ In this line, we import the Node.js http module, which allows us to create an HTTP server and handle incoming requests.
var requestHandler = require('./request-handler.js');




// Every server needs to listen on a port with a unique number. The
// standard port for HTTP servers is port 80, but that port is
// normally already claimed by another server and/or not accessible
// so we'll use a standard testing port like 3000, other common development
// ports are 8080 and 1337.
var port = 3000;
// For now, since you're running this server on your local machine,
// we'll have it listen on the IP address 127.0.0.1, which is a
// special address that always refers to localhost.
var ip = '127.0.0.1';

//Here, we define the port and IP address on which our server will listen. In this case, the server will run on http://127.0.0.1:3000.
// this is the code in parse file:   server: `http://127.0.0.1:3000/classes/messages`,



// We use node's http module to create a server.
// The function we pass to http.createServer will be used to handle all
// incoming requests.
// After creating the server, we will tell it to listen on the given port and IP. */

//We use the http.createServer() method to create an HTTP server.
//The handleRequest function will be used to handle incoming requests.
//that whenever an HTTP request is made to the server, the requestHandler function will be invoked to handle that request.
var server = http.createServer(requestHandler);

//This line logs a message to the console, indicating that the server is listening on the //specified IP address and port.
console.log('Listening on http://' + ip + ':' + port);
server.listen(port, ip);

//This line ^ starts the server and makes it listen for incoming HTTP requests on the specified IP address and port.

// To start this server, run:
//
//   node basic-server.js
//
// on the command line.
//
// To connect to the server, load http://127.0.0.1:3000 in your web
// browser.
//
// server.listen() will continue running as long as there is the
// possibility of serving more requests. To stop your server, hit
// Ctrl-C on the command line.