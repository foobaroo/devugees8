//CONST & LET
let name = 'John';
name = 'Max';
console.log(name);

const person = {
  name: 'John',
  age: 33
};

person.name = 'Jack';
person.city = 'Berlin';
console.log(person);

const nums = [1, 2, 3, 4];
nums.push(5);
console.log(nums);

//ARROW FUNCTION

/*
function sayHello() {
  console.log('hello');
}
sayHello();
*/

const sayHello = name => {
  console.log(`hello ${name}`);
};
sayHello('john');

const fruits = ['Apples', 'Oranges', 'Grapes'];
//FOREACH
fruits.forEach((fruit, index) => console.log(fruit));

//MAP
const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toLocaleUpperCase());

console.log(singleFruit);

//FILTER
const people = [
  { id: 1, name: 'Karen' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Sharon' }
];

const newPeople = people.filter(currentPeople => currentPeople.id !== 2);

console.log(newPeople);

//SPREAD
const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [...arr2.filter(num => num !== 2)];

console.log(arr3);

const person1 = {
  name: 'Ribo',
  age: 39
};

const person2 = {
  ...person1,
  email: 'ribo@gmail.com'
};

console.log(person2);

//DESTRUCTURING
const profile = {
  fullname: 'John Doe',
  address: {
    street: '40 Main st',
    city: 'Boston'
  },
  hobbies: ['movies', 'music']
};

const { fullname, address, hobbies } = profile;

const { street, city } = profile.address; //address

console.log(fullname);
console.log(hobbies);
console.log(city);

//CLASSES
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }
}

const person1Obj = new Person('John', 33);
const person2Obj = new Person('Sara', 28);
console.log(person1Obj.greet());
console.log(person2Obj.greet());

//SUB CLASSES
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age); //passing to parent class constructor (Person class)
    this.balance = balance;
  }

  info() {
    return `${this.name}  owes $${this.balance}.00`;
  }
}
const customerObj = new Customer('kevin', 32, 200);
console.log(customerObj.info());
console.log(customerObj.greet());

//MODULES

//file 1 (file1.js)
export const name = 'Jeff';
export const nums = [1, 2, 3];
export default Person;

//file 2 (file2.js)
import { name, nums } from './file1';
import Person from '.file1';
