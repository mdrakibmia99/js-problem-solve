// 1.Task: Array Filtering and Mapping

// -Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const peoples = [
  { name: "Rakib", age: 25, gender: "male" },
  { name: "Hasna", age: 22, gender: "female" },
  { name: "Jannat", age: 30, gender: "female" },
  { name: "Salma", age: 27, gender: "female" },
  { name: "Jamil", age: 5, gender: "male" },
];

const getMaleNames = (arr) =>
  arr.filter((people) => people.gender !== "female").map(({ name }) => name);

console.log(getMaleNames(peoples));
// Output: [ 'Rakib', 'Jamil' ]
