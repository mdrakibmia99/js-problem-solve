// 4.Task: Sorting Objects

// -Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "Ford", model: "Focus", year: 2020 },
];
// ascending order 
cars.sort((a, b) => a.year - b.year);
// descending order
// cars.sort((a, b) => b.year - a.year);

console.log(cars);