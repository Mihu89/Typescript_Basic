const os = require('os');

const greeting = require('./greetings');

// get current userName
let userName = os.userInfo().username;

console.log(`Date of request: ${greeting.date}`);
console.log(`Message: ${greeting.SayMessage()}`);

console.log(`Hello ${greeting.name}`);

var greeting2 = require('./greetings');
greeting2.name="Mike";

console.log(`Hello ${greeting.name}`);
console.log(`Hello ${greeting2.name}`);
