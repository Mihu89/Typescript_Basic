// const http = require('http');

// http.createServer(function(request, respose){
//     console.log('hi');
// }).listen(3000);

/*
const fs = require('fs');

let writebaleStream = fs.createWriteStream('water.txt');
writebaleStream.write("First message");
writebaleStream.write("Seccond message");

writebaleStream.end("Last message");

let readableStream = fs.createReadStream('water.txt', 'utf-8');

readableStream.on('data', function(chunk){
        console.log(chunk)
});

// copy info from water.txt into waterCopy.txt
let readableStream2 = fs.createReadStream('water.txt', 'utf-8');
let writebaleStream2 = fs.createWriteStream('waterCopy.txt');

// readableStream2.on('data', function (chunk){
//     writebaleStream2.write(chunk);
// });
readableStream2.pipe(writebaleStream2);
*/

//create archive from existing file

const fs = require('fs');
const zlib = require('zlib');

let readStream = fs.createReadStream('water.txt', 'utf-8');

let writeStream = fs.createWriteStream('water.txt.gz');

let gzip = zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);


