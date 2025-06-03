// 2.Task: Object Manipulation

// -Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "Web developer", author: "RK", year: 2022 },
  { title: "Level 2", author: "Md Rakib Mia", year: 2025 },
];

const getBookTitles = (arr) => arr.map((book) => book.title);

console.log(getBookTitles(books));
// Output: [ 'Web developer', 'Level 2' ]
