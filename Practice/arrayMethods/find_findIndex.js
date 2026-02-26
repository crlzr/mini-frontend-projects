/*
You will be given an array of objects
Your task is to return one of the following strings:

< firstName here >, < country here > of the first Python developer who has signed up;

your function should return Victoria, Puerto Rico.

Notes:

The input array will always be valid and formatted as in the example above.
*/

var list1 = [
  {
    firstName: "Mark",
    lastName: "G.",
    country: "Scotland",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 30,
    language: "Python",
  },
  {
    firstName: "Emma",
    lastName: "B.",
    country: "Norway",
    continent: "Europe",
    age: 19,
    language: "Clojure",
  },
];

function getFirstPython(list) {
  let coders = list.find((person) => person.language === "Python");
  if (!coders) return null;
  return `${coders.firstName}, ${coders.country}`;
}

console.log(getFirstPython(list1));
