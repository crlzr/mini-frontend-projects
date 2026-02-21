const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Function declaration

function doubleNumbers() {
  let result = numbers.map((num) => num * 2);
  return result;
}

function doubleNumbers() {
  return numbers.map((num) => num * 2);
}

// Function Expression

const doubleNumbers = function (numbers) {
  let result = numbers.map((num) => num * 2);
  return result;
};

const doubleNumbers = function (numbers) {
  return numbers.map((num) => num * 2);
};

// Arrow function

const doulbeNumbers = (numbers) => {
  let result = numbers.map((num) => num * 2);
  return result;
};

const doubleNumbers = (numbers) => {
  return numbers.map((num) => num * 2);
};

// Short arrow function

const doubleNumbers = (numbers) => numbers.map((num) => num * 2);
