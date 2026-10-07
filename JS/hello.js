const name = "Vin";
let age = 26;
const country =" Tanzania";
// name = "John";
age = 27;
let bike;

console.log(bike);
let city = "Esbjerg";
bike = "Yamaha";

console.log(bike);
console.log(`Hello, my name is ${name}. I am ${age} years old and I'm from ${country}.`);

console.log(name,age,country,city);
// console.info(`Hello, my name is ${name}. I am ${age} years old and I'm from ${country}.`);
// console.error(`Hello, my name is ${name}. I am ${age} years old and I'm from ${country}.`);



// class/let/const > TDZ : try to access them before no reference 
// var no TDZ




// console.log(x); // ReferenceError (TDZ) // hoisted but not initialized
// let x = 10;
// console.log(x2); // ReferenceError (TDZ) //hoisted but not initialized
// const x2 = 10;



console.log(y); // undefined  :: hoisted and initialized with undefined
var y = 20;






sayHi(); // Fully hoisted!

function sayHi() {
  console.log("Hi");
}

// sayHi2(); // TypeError: sayHi is not a function ::: depending on var/let/const,
// //  function expression is not hoisted like function declaration

// var sayHi2 = function () {
//   console.log("Hi");
// };



// what happens when we push does it delete one and make new one.
const kids = ["John", "Jane", "Jack"];
let fruits = ["Apple", "Banana", "Orange"];
const kid = { name: "John", age: 10 };






//what if i dont know property of the chair and we want it dynamic
const chairAttributes = ["color", "height", "legs", "top", "metric", "age" , "material"];

const seat = "round";
const height = 120;
const legs = 3;
const top = "flat";
const metric = true;
const chairAge = 2;
const material = "plastic";


const chair = {
    color: "brown",
    height: 100,
    legs: 4,
    top:"flat",
    metric: true,
    age:3, // In years
    material: "wood"
}


// Object.fromEntries() is a JavaScript method that converts an iterable of [key, value] pairs into an object.

const theChair = Object.fromEntries(
  chairAttributes.map(key => [key, null])
);


const theChair2 = chairAttributes.reduce((obj, key) => {
  obj[key] = null;
  return obj;
}, {});

console.log("theChair2");
console.log(theChair2);






const values = ["red", 100, 4, "round", "cm", 2, "wood"];

const chair3 = Object.fromEntries( //this getts  the hash map: map to object
  chairAttributes.map((key, i) => [key, values[i]])  //is a hashmap key n valuepair : array
);

console.log(chair3);



// reduce((obj, key) => {
//   obj[key] = null;
//   return obj;
// }, {});

/*

const chair = chairAttributes.reduce((obj, key) => {
  obj[key] = null;
  return obj;
}, {});
  

{} - initial value of obj, which is an empty object. This is the starting point for the accumulation process.



const callback = (obj, key) => {
  obj[key] = null;
  return obj;
};

let result = {};

result = callback(result, "color");
result = callback(result, "height");
result = callback(result, "legs");
result = callback(result, "top");
result = callback(result, "metric");
result = callback(result, "age");
result = callback(result, "material");

console.log(result);


array.reduce((acc, current) => {
  return acc;
}, initialValue);

*/


// A list of varourate meals




const favoriteMeals = ["Fish soup", "Grilled Chicken", "Kisamvu"];
//length
console.log(favoriteMeals.length);

//printing my array
console.log(favoriteMeals);

for (let i = 0; i < favoriteMeals.length; i++) {
  console.log(i+1 + ": " + favoriteMeals[i]);
}



//OPERATORS AND USAGE
//comparing function : beter in a defined scope so that it does not pollute the global scope or other scopes

function isTripod(legs){
   return legs === 3;
}

const chairLegs =4 ;
const canSeat = chairLegs >= 4 ;




let session = ["teacher", "students", "classroom", "lesson", "tables" ];




let teachers = ["A", "B", "C"];
let students = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];


let numberOfTeachers = teachers.length;
let numberOfStudents = students.length;


console.log(numberOfStudents > 5);





// const sessionAttributes = ["teacher", "students", "classroom", "lesson", "tables" ];
// session = sessionAttributes.reduce((obj, key) => {
//   obj[key] = null;
//   return obj;
// }, {});

// console.log(session);

//  teachers = ["A", "B", "C"];
//  students = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];


//  numberOfTeachers = teachers.length;
//  numberOfStudents = students.length;


// console.log(numberOfStudents > 5);











function isGreater(a,b) {
    return a >= b;
}

const minimumToStart = 10;
const maximumToStart = 12;
const minimumTeachers_ = 2;
let studentsCondition = (count) =>  isGreater(count, minimumToStart) || count === maximumToStart;
let teachersCondition = (count) =>  isGreater(count, minimumTeachers_); ;

console.log(studentsCondition(10) ? "Class can start" : "Class cannot start");
console.log(studentsCondition(9) ? "Class can start" : "Class cannot start");


console.log(teachersCondition(3) || studentsCondition(9) ? "Class can start" : "Class cannot start");
console.log(teachersCondition(0) || studentsCondition(12) ? "Class can start" : "Class cannot start");







// 
let studentsPresent = 10;
let teachersPresent = 2;
let minimumStudents = 10;
let minimumTeachers = 2;
// ......



console.log("hello " + 23)
console.log("hello " + "23")
console.log(typeof ("23" + 23))
console.log(typeof (23 + 1+ "23" + 1))
console.log("hello " + NaN)

console.log(typeof `console.log(console.log("hello " + 23))`)

console.log(typeof ("23" - 23))
console.log( "23" - 20)
console.log(typeof ("23" * 23))
console.log(typeof ("23" / 23))
console.log(typeof ("23" % 23))

//concatenation uses addition +








