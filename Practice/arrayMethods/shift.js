/*
Take an array [2, 5, 1, 4, 3]
Remove the first element using shift()
Print the removed element and the remaining array
*/

const arr = [2, 5, 1, 4, 3];

function learnShift(arr) {
  const first = arr.shift();
  return [first, arr];
}

console.log(learnShift(arr)); // [2, [5, 1, 4, 3]]

/*
Take out the odd ones
keep the even ones at the same array position
*/

const numbers = [8, 3, 7, 2, 5, 4];

function sortNumbers() {
  let filtered = numbers.filter((num) => num % 2 === 1).sort((a, b) => a - b);

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      numbers[i] = filtered.shift();
    }
  }
  return numbers;
}

//console.log(sortNumbers(numbers));

function sortNumbersWithMap(numbers) {
  // find odd ones and sort them ascending
  let odds = numbers.filter((num) => num % 2 === 1).sort((a, b) => a - b);

  // map over the numbers array and replace the odd ones with the ones in odds
  return numbers.map((n) => (n % 2 === 1 ? odds.shift() : n));
}

console.log(sortNumbersWithMap(numbers));
