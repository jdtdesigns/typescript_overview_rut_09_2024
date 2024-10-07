"use strict";
let userInfo = 'JD';
let num = 10;
let isCool = true;
let fruits = ['orange', 'apple', 'grape'];
let strictArray = ['JD', 44];
function add(a, b) {
    return a + b;
}
const jd = {
    name: 'JD',
    age: 44
};
const jdDetails = {
    phone: '777-777-7777',
    address: '555 coding dr',
    hobbies: ['fishing', 'pickleball']
};
function printUserInfo(userObj, detailsObj) {
    console.log(`${userObj.name} is ${userObj.age} years old. They live at ${detailsObj.address} and you can reach them at ${detailsObj.phone}`);
    if (detailsObj.hobbies) {
        console.log(`${userObj.name} likes ${detailsObj.hobbies[0]}`);
    }
}
printUserInfo(jd, jdDetails);
// if (typeof userInfo === 'string') {
//   console.log(userInfo.toLowerCase())
// }
// if (typeof userInfo === 'number') {
//   console.log(Math.round(userInfo))
// }
// if (typeof userName === 'string') {
// }
