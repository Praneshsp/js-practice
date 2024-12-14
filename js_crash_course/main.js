console.log('Hello World');
console.error('This is an error');
console.warn('This is warining');

//variables:
//var, let, const
//let, const
// let --> reasign value is possible 
//const --> values can not be directly reasigned 

let ageee = 30;
ageee = 31;
console.log(ageee);

//const agee; --> error missing initilizer
const agee = 13;
// agee = 14;
console.log(agee);

//Data Types:
//String, Numbers, Boolean, null. undefined, symbol

//const name = 'John';
//const age = 18;
const rating = 4.2
const iscool = true;
const x = null;
const y = undefined;
let z; //undefined
//console.log(typeof name);
//console.log(typeof age);
console.log(typeof rating);
console.log(typeof iscool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

//Strings:
//concatination:
const name = 'John';
const age = 18;
console.log('My name is ' + name + ' and I am ' + age);
//template Strings:
console.log(`My name is ${name} and i am ${age}`);

const hello = `My name is ${name} and i am ${age}`;
console.log(hello);

//String properties and methods
const s = 'Hello World!';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(''));
const a = 'technology, computers, it, code';
console.log(a.split(', '));

//Arrays: -variables that hold multiple values 

const number = new Array(1,2,3,4,5);
console.log(number);

//const fruits = ['apples', 'oranges', 'pears', 10, false]; this possible
const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);

fruits[3] = 'grapes';
console.log(fruits);

console.log(fruits[1]);
console.log(fruits[0]);

fruits.push('mangoes');
console.log(fruits);

fruits.unshift('strawberries');
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(Array.isArray(fruits)); //true
console.log(Array.isArray('hello')); //false or 10--> false

console.log(fruits.indexOf('oranges'));

//Object Literals;
const person = {
    firstname: 'John',
    lastname: 'Doe',
    age: 30,
    occupation: 'Developer',
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'CA',
        zip: '12345'
    }
}
person.email = 'jon@email.com'
console.log(person);
console.log(person.firstname, person.lastname);
console.log(person.hobbies[0]);
console.log(person.address.city);
console.log(person.address);

const {firstname, lastname, address: {city}} = person;
console.log(firstname);
console.log(city);


const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Complete project',   
        isCompleted: false
    }
];

console.log(todos);
console.log(todos[1].text);

//JSON ---> ""
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//loops:
//For:
for(let i=0; i<10; i++){
    console.log(`for loop number: ${i}`);
}

//while
let i = 0;
while(i<10){
    console.log(`while loop number: ${i}`);
    i++;
}

//loop through array:
for(let i=0; i < todos.length; i++){
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo);
}

for(let todo of todos){
    console.log(todo.text);
}

for(let todo of todos){
    console.log(todo.id);
}
