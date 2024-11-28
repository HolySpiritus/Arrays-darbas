"Use strict";

// concat
// const string1 = "Garlic";
// const string2 = "Phone";


// const combinedString = string1.concat(" ", string2, "!");


// console.log(combinedString);

// every
// const strings = ["apple", "banana", "cherry"];

//  Use the every method to check if all strings have a length greater than 3
// const allLong = strings.every(str => str.length > 3);

//  Output the result
// console.log(allLong); 

// fill
 
// const array = new Array(5);

// array.fill(9)

// console.log(array)

// filter

// const names = ["Ichigo", "Chad", "Orihime", "Ywabach"]

// const namesWithI = names.filter(word => word.includes("i"));

// console.log(namesWithI);

// find

// const words = ["Apples", "Bananas", "Eggs"]

// const findEggs = words.find(word => word.includes("Eggs"))

// console.log(findEggs)

//findindexof

// Define an array of numbers
// const numbers = [1, 3, 5, 8, 9];

// Use findIndex to locate the first even number
// const index = numbers.findIndex(number => number % 2 === 0);


// console.log(index); // 3 (index of 8)

//for each

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;


// numbers.forEach(number => {
//   sum += number;
// });


// console.log(sum); // 15

//join

// const words = ["Welcome", "to", "Elden", "Ring", "Tarnsihed"];


// const sentence = words.join(", ");

// console.log(sentence); 

// last index of

// const fruits = ["apple", "banana", "cherry", "apple", "date"];

// Use lastIndexOf to find the last occurrence of "apple"
// const lastIndex = fruits.lastIndexOf("apple");


// console.log(lastIndex); // 3

// length

//const numbers = [1, 2, 3, 4, 5];

// Get the length of the array
//console.log(numbers.length); // 5

// map

//const numbers = [1, 2, 3, 4, 5];

// Use map to create a new array with each number doubled
//const doubled = numbers.map(number => number * 2);

//console.log(doubled); // [2, 4, 6, 8, 10]

// pop

//const numbers = [1, 2, 3, 4, 5];

//console.log(numbers.pop()); // 5

// push

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.push(6))

// Define an array of strings
// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

// Use reduce to count occurrences of each word
//const wordCount = words.reduce((accumulator, currentValue) => {
//   accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
//   return accumulator;
// }, {});

// console.log(wordCount); 
// { apple: 3, banana: 2, orange: 1 }

// reverse 

// const numbers = [1, 2, 3, 4, 5, 6]

// console.log(numbers.reverse())

//reduce

// const numbers = [1, 2, 3, 4, 5];

//  Use reduce to sum up the numbers
// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0); // Initial value is 0

// console.log(sum); // 15

//toReverse

// const numbers = [1, 2, 3, 4, 5];

// const reversed = numbers.toReversed();

// console.log(reversed); // [5, 4, 3, 2, 1]
// console.log(numbers);  // [1, 2, 3, 4, 5] 

//shift

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.shift())

// slice

// const word = "Hate"

// const wordSlice =  word.slice(2)

// console.log(wordSlice)

//some

// const numbers = [5, 8, 13, 2, 9];

// const hasGreaterThanTen = numbers.some(num => num > 10);

// console.log(hasGreaterThanTen); // true (because 13 > 10)

//sort

// const fruits = ["banana", "apple", "cherry"];
// fruits.sort();

// console.log(fruits); // ["apple", "banana", "cherry"]

//to sort

// const fruits = ["banana", "apple", "cherry"];
// const sortedFruits = fruits.toSorted();

// console.log(sortedFruits); // ["apple", "banana", "cherry"]
// console.log(fruits);       // ["banana", "apple", "cherry"] 

//splice

// const fruits = ["apple", "banana", "cherry", "date"];

// // Remove all elements from index 2 to the end
// const removed = fruits.splice(2);

// console.log(fruits); // ["apple", "banana"]
// console.log(removed); // ["cherry", "date"]

// unshift

// const fruits = ["banana", "cherry"];

// const newLength = fruits.unshift("apple");

// console.log(fruits); // ["apple", "banana", "cherry"]
// console.log(newLength); // 3





