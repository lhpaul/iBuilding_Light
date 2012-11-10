var http = require('http');
var sys = require('util');
var url = require('url');
var fs = require('fs');
var isOn = true;

var port = 8080
if(process.env.NODE_ENV == "testing")
	port = 3000;

http.createServer(function (req, res) {
    var url_parts = url.parse(req.url);
		

	function getStatus(url, req, res) {
		console.log("Request handler 'random was called.");
		res.writeHead(200, {'Content-Type': 'application/json'});
		var response = {};
		if(isOn)
		{
			response.on = true;
		} else {
			response.on = false;
		} 

		res.write(JSON.stringify(response));
		res.end();
	}

	function switchStatus(url, req, res) {
		isOn = !isOn;
		res.end('Switch!');
	}
 
    switch(url_parts.pathname) {
    case '/':
	display_root(url_parts.pathname, req, res);
	break;
    case '/status':
	getStatus(url_parts.pathname, req, res);
	break;
    case '/toggle':
	switchStatus(url_parts.pathname, req, res);
	break;
    default:
	display_404(url_parts.pathname, req, res);
    }
    return;
 
    /**
     * Display the document root
     **/
    function display_root(url, req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Dispositivo Luz: 1) /status  2) /toggle');
    }
 
    /**
     * Display the 404 page for content that can't be found
     **/
    function display_404(url, req, res) {
	res.end('error')
    }
}).listen(port,"0.0.0.0");
sys.puts(process.env.NODE_ENV);
sys.puts('Server running');
