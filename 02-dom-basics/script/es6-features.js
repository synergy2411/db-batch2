// ARROW FUNCTIONS =>

// var marks = [98, 97, 88, 93, 85];

// var increasedMarks = marks.map((value) => value + 1);

// console.log(increasedMarks);

// var sum = (n1, n2) => n1 + n2;

// console.log("Sum : ", sum(2, 3));

// var square = (n1) => {
//   console.log("Received : ", n1);
//   return n1 * n1;
// };

// console.log("Square : ", square(3));

// DESTRUCTURING : "unpacking" the collection

// ordered by index
// var friends = ["Joe", "Chandler", "Monica", "Ross"];

// var [f1, f3, f4] = friends;

// console.log(f3);

// unordered collection
// var userOne = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 32,
// };

// var userTwo = {
//   firstName: "Jenny",
//   lastName: "Public",
//   age: 28,
// };

// var { age: userOneAge, lastName: userOneLastName } = userOne;

// var { age: userTwoAge, lastName: userTwoLastName } = userTwo;

// console.log(userOneLastName, userOneAge);

// var user = {
//   name: "John Doe",
//   email: "john@test",
//   address: {
//     street: "201, Main Road",
//     city: "Pune",
//   },
//   friends: ["Monica", "Jenny"],
// };

// var {
//   name,
//   email,
//   address: { street, city },
//   friends: [f1, f2],
// } = user;

// console.log(name, street, f2);

// BLOCK SCOPING - restrict scope of variable to the nearest block
// - let : for other types
// - const : for creating constants

// function demo(arr) {
//   if (arr.length > 2) {
//     let load = "LOAD";
//     console.log(flash); // undefined
// } else {
//     let flash = "FLASH";
//   }
// }

// demo([1, 2, 3, 4, 5]);

// REST / SPREAD Operator (...)
// REST - create the collection from individual items

// const demo = (labelOne, ...args) => {
//   console.log(args[0]); // two
// };

// demo("one")
// demo("one", "two")
// demo("one", "two", "three");

// SPREAD - spread the collection into individual item
// let numbers = [3, 4, 5];

// let moreNumbers = [1, 2, ...numbers, 6, 7, 8];

// console.log(moreNumbers); // [1,2,3,4,5,6,7,8]

// let userOne = {
//   name: "John Doe",
//   company: "DB",
//   isAdmin: true,
//   address: { city: "Pune" },
// };

// let userTwo = {
//   ...userOne,
//   name: "Jenny",
// };

// userOne.company = "Changed";
// // Shallow copy / Deep Copy
// userOne.address.city = "Mumbai";

// console.log(userTwo); // ?

// Reference : Object, Arrays, Functions, Date
// Primitive : String, Number, Boolean

// Template Literals - " " | ' ' | ` ` (back tick)
// - Embed the variables without ( + )
// - Multiline string without (\n)

// let username = "John Deo";

// let userAge = 32;

// let greet = `Hello ${username}!!

// I'm ${userAge} years old!

// `;

// console.log(greet);

// CLASSES

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   getDetails() {
//     return this.name;
//   }
// }

// class Student extends Person {
//   // Private Member
//   #courseName;

//   // Static
//   static numberOfStudents = 0;

//   // no-args constructor

//   // constructor() { } // CAN't OVERLOAD METHODS

//   constructor(studId, studName) {
//     super(studName);
//     this.studId = studId;
//     // this.studName = studName;
//     Student.numberOfStudents++;
//   }
//   // Accessor & Mutators
//   get courseName() {
//     return this.#courseName;
//   }

//   set courseName(value) {
//     this.#courseName = value;
//   }

//   getDetails() {
//     return `
//     Student ID - ${this.studId}
//     Student Name - ${super.getDetails()}
//     Course Enrolled = ${this.courseName}
//         `;
//   }
// }

// let john = new Student("S001", "John Doe");
// john.courseName = "React 101";
// console.log(john.getDetails());

// let jenny = new Student("S002", "Jenny Public");
// jenny.courseName = "React for Beginners";
// console.log(jenny.getDetails());

// console.log("Total Students : ", Student.numberOfStudents);

// MAP / SET

// let userOne = {
//   name: "John",
// };

// let map = new Map();

// map.set("name", "John");
// map.set(true, 1);
// map.set({ age: 32 }, "John");

// console.log("Map Size : ", map.size);

// for (let [key, value] of map.entries()) {
//   console.log(`${key} : ${value}`);
// }

// for (let value of map.values()) {
//   console.log(value);
// }

// for (let key of map.keys()) {
//   console.log(key);
// }

// let set = new Set();

// set.add("John");
// set.add("Jenny");
// set.add("Jack");
// set.add("Jill");
// set.add("Jill");

// console.log(set.size);

// DEFAULT PARAMETER
// const demo = (arr = []) => {
//   if (arr.length > 2) {
//     console.log("High Values");
//   } else {
//     console.log("Low Values");
//   }
// };

// demo();

// Short curcuit operator - &&

let arr = [];
const str = arr.length > 0 ? "Hello" : "Good Bye";
console.log("String 1 -", str);

const strTwo = arr.length > 0 && "Hello";

console.log("String 2 -", strTwo); // ?

const strThree = null && "Hello";

console.log("String 3 - ", strThree);
