// 5.Task: Find and Modify

// -Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
const peopleList = [
  { name: "Rakib", age: 25 },
  { name: "Hasna", age: 22 },
];

function updateAgeByName(arr, targetName, newAge) {
  const person = arr.find(p => p.name === targetName);
  if (person) {
    person.age = newAge;
  }else{
    console.log(`Person with name ${targetName} not found.`);
  }
  return arr;
}

console.log(updateAgeByName(peopleList, "Hasna", 23));

