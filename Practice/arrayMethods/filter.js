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

//console.log(uniqueEvenNumbers(numbers));

/*
 Define a method/function that removes from a given array of integers all the values contained in a second array.
 */

function removeSameInts(list1, list2) {
  let filtered = list1.filter((num) => !list2.includes(num));
  return filtered;
}

const list1 = [1, 1, 2, 3, 1, 2, 3, 4];
const list2 = [1, 3];

console.log(removeSameInts(list1, list2));
