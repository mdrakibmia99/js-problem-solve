// 7. Task: Leap Year Checker

// -Write a function that determines whether a given year is a leap year.

const isLeapYear = (year) => {
  if (typeof year !== "number" || year < 0) {
    console.log("Input must be a positive number");
    return false
  }
  return year % 4 === 0 || (year % 100 === 0 && year % 400 === 0);
};
console.log(isLeapYear(2020)); // Output: true
console.log(isLeapYear(2021)); // Output: false
console.log(isLeapYear("asdf")); // Output: Input must be a positive number
console.log(isLeapYear(-2020)); // Output: Input must be a positive number