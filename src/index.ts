let userInfo: string = 'JD';
let num: number = 10;
let isCool: boolean = true;
let fruits: String[] = ['orange', 'apple', 'grape'];
let strictArray: [String, Number] = ['JD', 44];


function add(a: number, b: number): number {
  return a + b;
}

// console.log(add(10, 5));


type User = {
  name: string;
  age: number;
}

type Details = {
  phone: string;
  address: string;
  hobbies?: String[]
}

const jd = {
  name: 'JD',
  age: 44
};

const jdDetails = {
  phone: '777-777-7777',
  address: '555 coding dr',
  hobbies: ['fishing', 'pickleball']
}


function printUserInfo(userObj: User, detailsObj: Details) {
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

