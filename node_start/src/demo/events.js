/* const EventEmiter = require('events');

const emmiter = new EventEmiter();

emmiter.on('something', data => {
    console.log("ON Processing event: ", data);
});

emmiter.emit('somehing', { x: 123 });

emmiter.emit('somehing', { y: 'abc' });

setTimeout(() => {
    // run your code
    emmiter.emit('something', { z: [1, 2, 3] });
}, 1800);

*/

/*
const Emmiter = require('events');
let emmiter = new Emmiter();
let eventName = 'greet';

emmiter.on(eventName, function () {
    console.log("Hello students");
});

emmiter.on(eventName, function () {
    console.log("Hola");
});

emmiter.on(eventName, function (data) {
    if (data !== undefined) {
        console.log("Privet students " + data);
    } else { 
        console.log("Privet students");
    }
});

emmiter.emit(eventName);


emmiter.emit(eventName, "Lesson two of node");

*/

// Create and use custome events

/* Generate events by function
const util = require('util');
const EventEmitter = require('events');

function User(){
}

util.inherits(User, EventEmitter);

let eventName = 'touch';
User.prototype.sayHi = function(data){
    this.emit(eventName, data);
}


let user = new User();

// function handler 
user.on(eventName, function(data){
    console.log('Hadler function process ', data);
})

// generate event

user.sayHi("Give me more knoledge !!!");
*/


/*
// Generate events for classes
const EventEmmiter = require('events');

let eventName = 'greet';

class Student extends EventEmmiter {
    sayHello(data){
        this.emit(eventName, data);
    }
}

let student = new Student();

// adding handler for Student class for event greet

student.on(eventName, function (data){
    console.log('Student ' + data);
});

setInterval(() => {
    student.sayHello("I learn something new, and is cool");

}, 2000);
*/
 const EventEmitter = require('events');
class Dispatcher extends EventEmitter {
    subscribe(eventName, cb) {//callback
        console.log('Someone is Subscribing ...');
        this.on(eventName, cb);
    }

    dispatch(eventName, data) {
        console.log('[Dispatching ...] (generate event) ');
        this.emit(eventName, data);
    }
}

const dispatcher = new Dispatcher();

dispatcher.subscribe('qwerty', data => {
    console.log("Handler for dispatcher process ", data);
});

dispatcher.dispatch('qwerty', {id: 1, name: 'Vasilii'});