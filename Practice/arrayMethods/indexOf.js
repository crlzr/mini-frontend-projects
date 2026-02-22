/*Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
*/

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [5, 3, 2, 1, 4];
const numbers3 = [2, 2, 1, 2, 1];

// remove the first occurrence of the smallest number
function removeSmallest(numbers) {
  let smallest = Math.min(...numbers);
  let findSmallestIndex = numbers.indexOf(smallest); // e.g. index 3
  return numbers.filter((num, index) => index != findSmallestIndex);
}

// remove the value
function removeAllSmallest(numbers) {
  let smallest = Math.min(...numbers);
  return numbers.filter((num) => num != smallest);
}

console.log(removeAllSmallest(numbers3));

// find smallest value with Math.min (which returns the lowest numeric number)
// find the index of this smallest number
// filter out
