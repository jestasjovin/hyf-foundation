const student = {
  name: "John",
  age: 32,
  pet: null,
  subjects: ["Js"],
  car: {
    color: "red",
  },
};

student.address = "Gulstavej (Langeland kom)";
console.log(student.address);
student.car = null;

// student = {} //assignment to constanr variables

console.log(student);

delete student.car;

console.log(student);

// ###############

const array = [];
const array2 = new Array();

const students = [
  {},
  {
    name: "John",
    age: 32,
    pet: null,
    subjects: ["Js"],
    car: {
      color: "red",
    },
  },
];

students.pop(); //O1
students.push(); //O1

students.shift(); //On    remove first and returns it
students.unshift(); //On  add first new array lenth

//include

students.at(2);
students[2];

//join => toString

console.log(
  students.includes({
    name: "John",
    age: 32,
    pet: null,
    subjects: ["Js"],
    car: {
      color: "red",
    },
  }),
);

//Array1.concat(Another array,ore even more)
// //Array1.concat("VAlue")

//flat
//flatMap
ui = 9;
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(ui);
