
const isLoading: boolean = false;
console.log(isLoading);

const int: number = 21;
const message: string = 'Typescript at Step IT';
const numberArray: number[] = [1, 2, 3];
const numberArray2: Array<number> = [1, 2, 3];

const words: string[] = ['apple', 'grapes'];

// Tuple
const contacts: [string, number] = ['StepIt', 225547];

//any
let something: any = '147';
something = 22;
something = ['asd', 255];
console.log(something);

// functions
function sayMyName(name: string) {
    console.log('Hi ' + name);
}
var say = function sayMyName(name: string): void {
    console.log('Hello ' + name);
};

sayMyName('Mike');
say('Saimon');

let say2 = (a) => console.log('Hola ' + a);
say2('John');


let say3 = (a) => {
    let result = 'Hello from ' + a
    return result;
}
say2('John');
console.log(say3('Smith'));

// Type
type Login = string;

const login: Login = 'admin';
console.log(login);

type ID = string | number;
const id1: ID = 123;
const id2: ID = '240';

type SomeType = ID | null | undefined;

