//TASK 1
const pet = {
  name: "Buddy",
  type: "dog",
  age: 2,
};

console.log(pet.name);
pet.age = 3;
pet.color = "brown";
delete pet.type;
console.log(pet);

//TASK 2
const shoppingList = ["Milk", "Bread", "Eggs", "Apples", "Cheese"];

for (let i = 0; i < shoppingList.length; i++) {
  console.log(`${i + 1}. ${shoppingList[i]}`);
  // if(i ===  (shoppingList.length -1)){
  // console.log(`Total items : ${shoppingList.length}`)}
  if ("Eggs" === shoppingList[i]) {
    console.log(`Don’t forget the eggs!`);
  }
}

console.log(`Total items : ${shoppingList.length}`);

//TASK 3
const countdown = [1, 2, 3, 4, 5];
for (let i = 0; i < countdown.length; i++) {
  console.log(`${i + 1}`);
}
console.log(`🚀 Blast off!`);

//Task 4
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 42 },
  { name: "Charlie", score: 73 },
  { name: "Diana", score: 95 },
  { name: "Eve", score: 38 },
];

let passedCount = 0;
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  student.passed = student.score > 50 ? true : false;
  if (student.passed) {
    passedCount++;
  }
  console.log(`${student.name} : ${student.passed ? "PASSED" : "FAILED"}`);
}

console.log(students);
console.log(`Passed students ${passedCount}`);

//event loop
//post and pre operatrs
//
