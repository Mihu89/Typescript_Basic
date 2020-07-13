function customTrim(x: string | number) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}

class MyResponse {
    header = 'response header ';
    result = 'response result '
}

class MyError {
    header = 'error header';
    message = 'error message';
}

function handle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}
let package = new MyResponse();
console.log(handle(package));

type AlertType = 'success' | 'danger' | 'warning' | 'info';

function setAlertType(type: AlertType) {
    console.log(type);
}

setAlertType('success');
setAlertType('danger');

// setAlertType('default');

// Generics

const arrayOfNumbers: Array<number> = [1, 8, 9];
const arrayOfStrings: Array<string> = ["Lesson", "two", "of", "AR ts"];

function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

// console.log(reverse(arrayOfNumbers));

// console.log(reverse(arrayOfStrings));

function reverseReverse<T>(array: T[]): T[] {
    let response: T[];
    //if (Array.isArray(array[0]) ) {
        array.forEach(element => {
           if (Array.isArray(element) || typeof element === 'string') {
                var tmp = element.toString().split("");
                var reverseTmp = tmp.reverse();
                response.push(<T> reverseTmp.join(""));
               console.log(reverseTmp.join(""));
           }
        });
if( response == null){
    console.log("null");
}else{
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

    