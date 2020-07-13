interface Person {
    name: string;
    age: number;
}

type PersonKeys = keyof Person; // 'name' | 'age'

let key: PersonKeys = 'name';
key = 'age';

type User = {
    _id: number;
    name: string;
    email: string;
    createdAt: Date;
};

type UserType1 = Exclude<keyof User, '_id' | 'createdAt'>;
type UserType2 = Pick<User, 'name' | 'email'>;
let u1: UserType1 = 'name';

// Iterators and generators
let someArray = [1, "test", true];

for (let element of someArray) {
    console.log(element);
}

for (let elem in someArray) {
    console.log(elem);
}

let pets = new Set(["dog", "cat", "mouse", "horse", "cat"]);
//pets.add("dog").add("cat").add("mouse").add("horse");
pets["bird"] = "tucano";

console.log("#################");

for (let pet in pets) {
    console.log(pet);
}
console.log("********************")
for (let pet of pets) {
    console.log(pet);
}

let numbers = [1, 2, 3, 4, 5, 6];
for (let n in numbers) {
    console.log(n);
}
