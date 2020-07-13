function customTrim(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}
var MyResponse = /** @class */ (function () {
    function MyResponse() {
        this.header = 'response header ';
        this.result = 'response result ';
    }
    return MyResponse;
}());
var MyError = /** @class */ (function () {
    function MyError() {
        this.header = 'error header';
        this.message = 'error message';
    }
    return MyError;
}());
function handle(res) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        };
    }
    else {
        return {
            info: res.header + res.message
        };
    }
}
var package = new MyResponse();
console.log(handle(package));
function setAlertType(type) {
    console.log(type);
}
setAlertType('success');
setAlertType('danger');
// setAlertType('default');
// Generics
var arrayOfNumbers = [1, 8, 9];
var arrayOfStrings = ["Lesson", "two", "of", "AR ts"];
function reverse(array) {
    return array.reverse();
}
// console.log(reverse(arrayOfNumbers));
// console.log(reverse(arrayOfStrings));
function reverseReverse(array) {
    var response;
    //if (Array.isArray(array[0]) ) {
    array.forEach(function (element) {
        if (Array.isArray(element) || typeof element === 'string') {
            var tmp = element.toString().split("");
            var reverseTmp = tmp.reverse();
            response.push(JSON.parse(reverseTmp.join("")));
            console.log(reverseTmp.join(""));
        }
    });
    if (response == null) {
        console.log("null");
    }
    else {
        console.log("Notnull");
    }
    console.log('R  ' + response);
    //  return response.reverse();
    // }else {
    return array.reverse();
    // }
}
function test(x) {
    var tmp = x.toString().split("");
    var reverseTmp = tmp.reverse();
    console.log(reverseTmp.join(""));
}
console.log(reverseReverse(arrayOfNumbers));
console.log(reverseReverse(arrayOfStrings));
