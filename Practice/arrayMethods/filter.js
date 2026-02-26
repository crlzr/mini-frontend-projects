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

//console.log(removeSameInts(list1, list2));

/*
Write a function that counts how many even numbers are in an array.
*/

const numbersArr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 5, 3, 5, 6, 7, 7];

function countNumbers(arr) {
  let mapped = arr.map((char) => {
    let count = arr.filter((eachChar) => eachChar === char).length;
    return count;
  });
  return mapped;
}

console.log(countNumbers(numbersArr));

function disemvowel(str) {
  let vocals = "aeiouAEIOU";
  let strArr = str.split("").filter((char) => !vocals.include(char));
  return strArr;
}
