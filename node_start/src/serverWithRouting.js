const http = require('http');

http.createServer(function (request, respose) {
    respose.setHeader("Content-Type", "text/html; charset=utf-8");

    if (request.url === '/home' || request.url == '/') {
        respose.write("<h1>Homepage</h1><p>My First <span style='color:green'>NodeJS</span> server</p>");
    } else {
        if (request.url === '/about') {
            respose.write("<h1>About page</h1><p>Default info</p>");
        } else {
            if (request.url === '/contact') {
                //respose.write("<h1>Contact page</h1><p>Default info</p>");
                // temporary redirect
                
                respose.statusCode = 302;
                respose.setHeader('Location','/about')
            } else {
                respose.statusCode = 404;
                respose.write("<h1>Not found page</h1><p>Page doesn't esxist</p>");
            }
        }
    }
    respose.end();
    // console.log('receive ' + request);
}).listen(3000);
