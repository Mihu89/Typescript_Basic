const http = require('http');

http.createServer(function(request, respose){

console.log("Url " + request.url);
console.log("Type of request(GET,POST..) " + request.method);
console.log("Browser (User-Agent) " + request.headers["user-agent"]);
console.log("All headers " + JSON.stringify(request.headers, null, 4));
console.log("MaxListeners " + request.getMaxListeners);
console.log("httpVersion " + request.httpVersion);
    //respose.end("My First NodeJS server");
    respose.setHeader("UserId", 1251);
    respose.setHeader("Content-Type","text/html; charset=utf-8");
    respose.write("<h1>My First <span style='color:green'>NodeJS</span> server</h1>");
    respose.end();
   // console.log('receive ' + request);
}).listen(3000);
