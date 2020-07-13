// File system
const path = require('path');
const fs = require('fs');

// Creating directory:
//fs.mkdirSync(path.join(__dirname,'test'));

fs.mkdir(path.join(__dirname,'testFolder'), (err) => {
    if(err){
        console.log('We have an error on creating directory ex: ' + err.path);
    }
    
    console.log("Folder is created");
});

// Create file:
const filePath = path.join(__dirname, 'test', 'step.txt');

fs.writeFile(filePath, 'Hello from Nodejs',err => {
    if(err){
        throw err;
    }
    console.log("File was created");

    fs.appendFile(filePath,'\nSoon will start lesson two\t Are you ready ?', err =>{
        if(err){
            throw err;
        }
        console.log('File was modified');
    })
});

// Read file sample
const filePath2 = path.join(__dirname, 'test', 'stepit.txt');
fs.readFile(filePath2, 'utf-8', (err, content) =>{
    if (err){
        throw err;
    }
    console.log("############")
    console.log(content);
    // const data = Buffer.from(content);
    // console.log("Content is: ", data.toString());
});