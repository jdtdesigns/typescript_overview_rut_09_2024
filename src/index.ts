import App from './classes/App.js';

// App.seedEmployees();
// App.showMainMenu();

const data = [
  {
    name: 'JD',
    age: 44
  },
  {
    name: 'Bob',
    age: 99
  },
  {
    name: 'Jane',
    age: 35
  }
];

const bob = data.find((userObj) => {
  if (userObj.name === 'Bob') {
    return userObj;
  }

  return false;
});

console.log(bob);