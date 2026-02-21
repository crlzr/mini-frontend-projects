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

console.log(moreThan3(words));

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

console.log(returnCapitalisedWords(words));
