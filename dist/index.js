"use strict";
// const jd = {
//   name: 'JD',
//   age: 44,
//   address: '555 coding',
//   phone: '777-777-7777'
// };
// const bob {
//   name: 'Bob',
//   age: 99,
//   address: '777 coding',
//   phone: '888-888-8888'
// };
// function Person(userName, userAge, address, phone) {
//   this.name = userName;
//   this.age = userAge;
//   this.address = address;
//   this.phone = phone;
// }
// Person.prototype.printBirthday = function () {
//   console.log(`${this.name} is ${this.age} years old`);
// }
class Animal {
}
class Person {
    constructor(name, age, address, phone) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
        this.name = name;
        this.age = age;
        this.address = address;
        this.phone = phone;
    }
    printBirthday() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}
const jd = new Person('JD', 44, '555 coding dr', '77777777');
const bob = new Person('Bob', 99, '777 old st', '88888888');
const jane = new Person('Jane', 35, '1999 old st', '88888888');
const frank = new Person('Frank', 55, '1111 old st', '88888888');
jd.printBirthday();
// console.log(jd);
// console.log(bob);
// console.log(jane);
// console.log(frank);
