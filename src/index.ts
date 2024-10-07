function getUserInput() {
  const userName = String(prompt('Please type your name'));
  let age: number = 0;

  while(!age) {
    age = Number(prompt('Please enter your age'))
  }

  const userData: {
    userName: string,
    age: number
  } = {
    userName: userName,
    age: age
  };

  return userData;
}

// const data = getUserInput();

// console.log(data);

// function Number(val) {
//   return typeof val === 'number' ? val : 0;
// }

// const num = new Number();

// class Person {
//   constructor(userName) {
//     this.name = userName;
//   }
// }

// const jd = new Person('JD');
// const bob = new Person('Bob');

// console.log(jd);
// console.log(bob);