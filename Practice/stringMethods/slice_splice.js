/*
Problem:
Given an array, return a new array containing everything except the first and last elements.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sliceArray(numbers) {
  return numbers.slice(0, 3);
}

//console.log(sliceArray(numbers));

// (1, -1) prints 2 - 9
// (4, -4) prints 5, 6

/*
Given a sentence, return a new sentence where each word has its first and last letter removed.
*/

const sentence = "Javascript is awesome";

function sliceWords(sentence) {
  let words = sentence.split(" ");
  let trimmed = words.map((word) => word.slice(1, -1));
  let joined = trimmed.join(" ");
  return joined;
}

const sliceWords2 = (sentence) => {
  let words = sentence.split(" ");
  return words.map((word) => word.slice(1, -1)).join(" ");
};

const sliceWords3 = (sentence) =>
  sentence // everything after => is returned .. and this returns the whole sentence and no we split, map and join it
    .split(" ")
    .map((word) => word.slice(1, -1))
    .join(" ");

//console.log(sliceWords3(sentence));

const onlyLastWord = (sentence) => sentence.split(" ").slice(2);

console.log(onlyLastWord(sentence));
