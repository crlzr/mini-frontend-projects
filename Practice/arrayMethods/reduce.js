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

//console.log(wordCount(words));
// Output: { apple: 3, banana: 2, orange: 1 }

/*
You will be given an array of objects representing data about developers.

Your task is to return an object which includes the count of each coding language represented at the meetup.
*/

var list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
  },
];

// { C: 2, JavaScript: 1, Ruby: 1 }

function countLanguages(list) {
  return list.reduce((count, dev) => {
    const lang = dev.language;
    count[lang] = (count[lang] || 0) + 1;
    return count;
  }, {});
}

console.log(countLanguages(list1));
