/*
Task: Positive Squares

Given an array of numbers, return a new array containing the squares of only the positive numbers.

*/

const numbers = [1, -2, 3, 0, -5, 4];

function PositiveSquares(numbers) {
  let result = numbers.filter((num) => num > 0);
  let final = result.map((num) => num * num);
  return final;
}

// console.log(PositiveSquares(numbers));

// Function Expression

const positiveSquares = (numbers) =>
  numbers.filter((num) => num > 0).map((num) => num * num);

//console.log(PositiveSquares(numbers));

/*
Task: Extract Long Words

Given an array of words, return a new array containing the lengths of all words that have more than 3 letters.
*/

const words = ["cat", "house", "tree", "a", "elephant"];

// function moreThan3(words) {
//   let more = words.filter((word) => word.length > 3);
//   let result = more.map((singleWord) => singleWord.length);
//   return result;
// }

const moreThan3 = (words) =>
  words.filter((word) => word.length > 3).map((word) => word.length);

//console.log(moreThan3(words));

/*

Problem:

Given an array of words, return a new array containing only the words longer than 4 letters, but capitalized (first letter uppercase, rest lowercase).

*/

function returnCapitalisedWords(words) {
  let filtered = words.filter((word) => word.length > 4);
  let capitalised = filtered.map((singleWord) => {
    return singleWord[0].toUpperCase() + singleWord.slice(1);
  });
  return capitalised;
}

//console.log(returnCapitalisedWords(words));

// Task: From an array of people objects, return an array of names of people
// who are 25 or older, all in uppercase.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 27 },
];

function getAdultsUppercase(arr) {
  let filtered = arr.filter((person) => person.age >= 25);
  let upperCase = filtered.map((person) => person.name.toUpperCase());
  return upperCase;
}

console.log(getAdultsUppercase(people));
// Expected output:
// ["ALICE", "BOB", "DAVID"]
