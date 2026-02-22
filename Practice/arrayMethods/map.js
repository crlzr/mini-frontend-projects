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

console.log(describePeople(people));
// Expected output:
// ["Alice is 25 years old", "Bob is 30 years old", "Charlie is 22 years old"]
