console.log("Hellow conditions");

let age  = 5;

if (age >= 18){
    console.log("You can vote");
}else{
    console.log(`You can vote in ${18 - age} years`);
}



const randomNumber =  0

if( randomNumber % 2 !== 0){
    console.log("Is Odd")
} else if( randomNumber === 0){
    console.log("Is Special Number ZERO : zero is special")
}else{
    console.log("Is even")
}



//shortcode or simpler : depend on colleague
//number can be reserved : how to properly name variables 


//AND OR NOT :: && || !
//- more complex 

//FALSY
//0    ""    null    undefined    NaN    false


// Everything else is truthy — including "0", " " and -1.

//checking array neeed to check length..so that we get 0 to be FALSY




console.log("C3 — Bank balance 🏦")
 const balance = []
if(!balance){   // !variable catches all falsy 
    console.log("Please deposit some money!")
}
else if(balance > 0 && balance <= 1000){
    console.log("Your balance is looking oka")
}
else if(balance > 1000 && balance <= 3000){
    console.log("Your balance is looking good")
}
else if(balance > 3000 && balance <= 10000){
    console.log("Your balance is fantastic ")
}
else{
    console.log("Your balance is AMAZING!")
}

// Test the edges: -5, 0, 1000, 1001, 10000, 50000



const items = 3;
console.log(`You have ${items} ${items === 1 ? "item" : "items" }   label`);




age = 15
const  isStudent = true
const day = "Tuesday"

// console.log(`Ticketet is ${age < 12 ? "free" : day == "Tuesday" && age >= 65 ? "30 Kr" : "60 Kr" : age >= 65 ? "60 Kr" : "120 Kr" }   `);

// Under 12 → free
// Student or 65 and over → 60 kr

// Everyone else → 120 kr
// Bonus: Tuesdays are half price for everyone who pays. Add const day = "Tuesday";


console.log(Math.round(4.1))
console.log(Math.round(4.5))
console.log(Math.round(4.6))
console.log(Math.round(4.9))
console.log(Math.floor(4.1))
console.log(Math.floor(4.5))
console.log(Math.floor(4.9))
console.log(Math.min(8, 3, 12))
console.log(Math.abs(-7))
console.log("Hack Your Future".toLowerCase())
console.log("Hack Your Future".includes("Your"))
console.log("  spaces  ".trim())



function introduction (name, country){
    console.log(`Hi my name is ${name} i'm from ${country}`)
}

function MySquare (side){
    console.log(`The square is ${side*side}`)
}

function defaultCity (city){
        console.log(` The city is  ${city ?  city : "Copenhagen"}`)
}

introduction("Vin","Tanzania")
introduction("Messi","Argentina")
introduction("Neymar","Brazil")

MySquare(3)
MySquare(-5)

defaultCity("Barcelona")
defaultCity("")




function c(n) {
 let x = 10
  return n + x;
}

console.log(c(c(1)))
//only executed when its called !



