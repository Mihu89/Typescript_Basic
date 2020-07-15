function User(name, age, hobby) {
    this.age = age;
    this.hobby = hobby;
    this.name = name;

    console.log(`Info User: ${name} ${age} ${hobby}`);
}

User.prototype.sayHi = function(){
    console.log(`Hello from ${this.name}`);
}

function doWork (){
    console.log("Do it");
}
module.exports = User;
