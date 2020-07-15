var source = require("./src");
const { date } = require("./src/demo/greetings");

source.getEveningMessage();
source.getMorningMessage();

global.name = "Step AR course";
global.console.log(date);

let nodePath = process.argv[0];
let appPath = process.argv[1];
let message = process.argv[2];
let notification = process.argv[3];

console.log(`nodepath ${nodePath}`);
console.log(`appPath ${appPath}`);
console.log();
console.log(`message ${message}`);
console.log(`notification ${notification}`);

// npm uninstall asd  ==unistall package 
// npm install asd == install package asd