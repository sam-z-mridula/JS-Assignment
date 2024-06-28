// 1) Takes two arguments and returns their sum.
function calculateSum(a, b) {
    return a + b;
}
console.log(calculateSum(3, 4));  // Output: 7

// 2) Takes one argument and returns true if the number is even, and false otherwise.
function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(4));  // Output: true
console.log(isEven(3));  // Output: false

// 3) Takes an array of numbers and returns the largest number in the array.
function findMax(numbers) {
    return Math.max(...numbers);
}
console.log(findMax([1, 2, 3, 4, 5]));  // Output: 5

// 4) Takes a string and returns the string reversed.
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));  // Output: "ollelo"

// 5) Takes an array of numbers and returns a new array containing only the odd numbers.
function filterOddNumbers(numbers) {
    return numbers.filter(number => number % 2 !== 0);
}
console.log(filterOddNumbers([1, 2, 3, 4, 5]));  // Output: [1, 3, 5]

// 6) Takes an array of numbers and returns the sum of all elements.
function sumArray(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));  // Output: 15

// 7) Takes an array of numbers and returns a new array sorted in ascending order.
function sortArray(numbers) {
    return numbers.slice().sort((a, b) => a - b);
}
console.log(sortArray([5, 3, 8, 1, 2]));  // Output: [1, 2, 3, 5, 8]

// 8) Takes a string and returns the same string with the first letter capitalized.
function capitalizeFirstLetter(str) {
    if (str.length === 0) return str;
    return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter("hello"));  // Output: "Hello"
