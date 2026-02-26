// Task: Given an array of objects representing people, return an array of strings
// showing each person's name and age in this format: "Name is Age years old".

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

function describePeople(arr) {
  return arr.map((person) => `${person.name} is ${person.age} years old`);
}

//console.log(describePeople(people));
// Expected output:
// ["Alice is 25 years old", "Bob is 30 years old", "Charlie is 22 years old"]

/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
*/

function duplicateEncode(word) {
  let lower = word.toLowerCase();
  let arrStr = lower.split("");
  let result = arrStr.map((char) => {
    const count = arrStr.filter(
      (eachCharacter) => eachCharacter === char,
    ).length;
    let final = count > 1 ? ")" : "(";
    return final;
  });
  return result.join("");
}

//console.log(duplicateEncode("ROSA"));

/*
Your task is to return an array where each object will have a new property
'greeting' with the following string value:
Hi < firstName here >, what do you like the most about < language here >?
*/

var list1 = [
  {
    firstName: "Sofia",
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: "Python",
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

function greetDevelopers(list) {
  let newArray = list.map((person) => {
    return {
      ...person,
      greeting: `Hi ${person.firstName}, what do you like the most about ${person.language}?`,
    };
  });
  return newArray;
}

function greetDevelopers(list) {
  return list.map((person) => ({
    ...person,
    greeting: `Hi ${person.firstName}, what do you like the most about ${person.language}?`,
  }));
}
/* Return
[
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  }
];

*/
