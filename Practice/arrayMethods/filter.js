/*
 Write a function that takes an array of numbers and returns a new array containing only the even numbers that appear exactly once.
 */

const numbers = [1, 2, 2, 3, 4, 5, 6, 6, 7];

function uniqueEvenNumbers(numbers) {
  let even = numbers.filter(
    (num) => num % 2 === 0 && numbers.indexOf(num) === numbers.lastIndexOf(num),
  );
  return even;
}

console.log(uniqueEvenNumbers(numbers));
