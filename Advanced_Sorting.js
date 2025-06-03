// 09.Task: Advanced Sorting



// -Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.
const students = [
  { name: "Rakib", grades: [80, 90, 85] },
  { name: "Nila", grades: [95, 92, 88] },
  { name: "Jamal", grades: [70, 75, 65] },
];

students.sort((a, b) => {
  const avgA = a.grades.reduce((s, g) => s + g, 0) / a.grades.length;
  const avgB = b.grades.reduce((s, g) => s + g, 0) / b.grades.length;
  return avgB - avgA;
});

console.log(students);
