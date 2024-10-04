"use strict";
function getUserInput() {
    const userName = prompt('Please type your name');
    const age = prompt('Please enter your age');
    const userData = {
        userName: userName,
        age: age
    };
    return userData;
}
