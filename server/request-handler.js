/* This is the request handler function that will be called whenever a request is made to the server. It takes two arguments: request and response, which represent the incoming request and the outgoing response, respectively.*/

var requestHandler = function(request, response) {

  // Request and Response come from node's http module.

  // Do some basic logging.
  console.log('Serving request type ' + request.method + ' for url ' + request.url);

  //In this section, we log information about the incoming request, initialize some variables for status code and headers, and set CORS headers to allow all origins.
  // The outgoing status.
  var statusCode;
  console.log('hi')
  // Set CORS headers to allow all origins.
  //These headers are used to control access to the server's resources from different origins (domains
  var headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'content-type, accept, authorization',
    'Access-Control-Max-Age': 10 // Seconds.
  };

  //Here, we check if the incoming request method is a GET request and if the URL is /classes/messages. If both conditions are met, we respond to the request with a 200 status code and a sample message in JSON format. We set the Content-Type header to application/json to indicate that the response body is in JSON forma
  // Check the request method and URL
  if (request.method === 'GET' && request.url === '/classes/messages') {
    // Respond to GET requests for /classes/messages with a 200 status code and a sample message
    var sampleMessages = [{
      username: 'john_doe',
      text: 'Hello, World!',
      roomname: 'lobby'
    },
    {
      username: 'Heith',
      text: 'Hello, World!',
      roomname: 'lobby'
    }];

//    var responseBody = {test: sampleMessages };
    statusCode = 200;

    // Set the Content-Type header to application/json
    headers['Content-Type'] = 'application/json';
    response.writeHead(statusCode, headers);
    response.end(JSON.stringify(sampleMessages));
  } else {
    // For any other routes or request methods, respond with a 404 status code
    statusCode = 404;
    response.writeHead(statusCode, headers);
    response.end();
  }
};

module.exports = requestHandler;