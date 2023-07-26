// var x = "Hello String";

// console.log(typeof x);

// x = 201;

// console.log(typeof x); // ?

// x = true;

// console.log(typeof x); // ?

// x = {};
// console.log(typeof x); // ?

// x = [];
// console.log(typeof x); // ?

// x = function () {};

// console.log(typeof x); // ?

// x = new Date("Dec 20, 2022");
// console.log(typeof x); // ?

// var user = {
//   name: "John",
//   age: 32,
//   email: "john@test.com",
// };

// let arr = [
//   "String",
//   101,
//   true,
//   {},
//   function () {
//     console.log("Hello from Array");
//   },
// ];

// arr[4]();

// ARRAY

var marks = [90, 92, 89, 95, 85, 99];

// marks.push(97);
// marks.pop();
// marks.unshift(88);
// marks.shift();
// marks.reverse();
// marks.sort();
// marks.fill(0, 2, 4);

// var newArr = marks.map(function (value) {
//   return value + 1;
// });
// var newArr = marks.filter(function (value) {
//   return value >= 90;
// });

// console.log(marks.splice(1, 4));
// console.log(marks.slice(1, 4));

// console.log(marks.indexOf(99));

// var position = marks.findIndex(function (value) {
//   return value === 92;
// });
// console.log(position);

// console.log(marks.includes(100));

// var isAnyMarkGreaterThan95 = marks.some(function (value) {
//   return value > 95;
// });

// console.log(isAnyMarkGreaterThan95);

// var isEveryMarkGreaterThan95 = marks.every(function (value) {
//   return value > 80;
// });

// console.log(isEveryMarkGreaterThan95);

// console.log(marks.join("/"));

// var reducedValue = marks.reduce(function (prevValue, acc) {
//   return prevValue + acc;
// });

// console.log(reducedValue / marks.length);

// console.log(marks);
// console.log(newArr);

// FUNCTIONS

// function mystry() {
//   var chooseNumber = function () {
//     return 7;
//   };
//   return chooseNumber;
//   var chooseNumber = function () {
//     return 12;
//   };
// }

// // console.log(mystry()); // ?

// var nestedFn = mystry();

// console.log(nestedFn()); // 7

function greet() {
  console.log("Hello there!");
}

function demoGreet(cb) {
  cb();
}

demoGreet(greet);
