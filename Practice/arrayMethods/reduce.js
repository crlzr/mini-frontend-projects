// Task 1: Sum all numbers in an array using reduce
const numbers = [1, 2, 3, 4, 5];

function sumArray(arr) {
  return arr.reduce((sum, num) => (sum += num));
}

// console.log(sumArray(numbers));

// Task 2: Find the maximum number in an array using reduce
const nums = [5, 12, 8, 20, 3];

function maxNumber(nums) {
  return nums.reduce((result, num) => Math.max(result, num));
}

// console.log(maxNumber(nums));

// Task 3: Count how many times each word appears in an array using reduce
const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

function wordCount(words) {
  return words.reduce((count, word) => {
    if (count[word]) {
      count[word] += 1; // word already exists → add 1
    } else {
      count[word] = 1; // word not in acc → start at 1
    }
    return count; // always return the accumulator
  }, {}); // <-- empty object as initial value
}

console.log(wordCount(words));
// Output: { apple: 3, banana: 2, orange: 1 }
