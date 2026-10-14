// getCircleArea(radius) — returns π × r². Hint: Math.PI
// celsiusToFahrenheit(celsius) — returns °C × 9 / 5 + 32
// Google "20 celsius to fahrenheit" — does your function agree?

// Then delete the return keyword in getCircleArea. What do you get now? Why?



function getBalance(balance){
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

return balance
}











const VAT = 0.25


function getVat(price) {

             return VAT * price;

}

function getPriceWithVat(price) {

      return getVat(price ) + price;


}

function getShippingCost(total) {
  return total >= 500 ? 0 : 49;



}

function getFinalPrice(price) {
  const total = getPriceWithVat(price, VAT);
  return total + getShippingCost(total);
}

console.log(getFinalPrice(100)); 
console.log(getFinalPrice(400));










// SCOPE
const globalVar = "🌍 global";

function outer() {
  const outerVar = "📦 outer";

  function inner() {
    const innerVar = "🔒 inner";
    console.log(globalVar); // ✅
    console.log(outerVar);  // ✅ inner sees its parent
    console.log(innerVar);  // ✅
  }

  inner();
//   console.log(innerVar);    // ❌ parent can't see child
}

outer();










// [1, 2, 3].forEach(i => {
//   console.log(i);
// });

// for (const i in [1, 2, 3]) {
//   console.log(i); 
// }





function logString(stringToLog, numberOfTimesToLog) {

for(i = 0 ; i <=numberOfTimesToLog ; i ++){
console.log(`${i}: ${stringToLog[i]}  `)
}
}



logString("hello", 4)

// console.clear()



for(i = 74 ; i <=98 ; i ++){
console.log(  i)
}

for(i = 10 ; i >= 0 ; i --){
console.log(i === 0 ? "Liftoff! 🚀" : i)

}

for(i = 0 ; i <=20 ; i = i + 2){
console.log(i)
}



const recipients = "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohamed@gmail.com";

// This function pretends to send an email
function sendEmailTo(recipient) {
  console.log("email sent to " + recipient);
}

const recipientsArray =  recipients.split("|")
recipientsArray.map((email)=>{
    sendEmailTo(email)
})

for(i=0, i <= recipientsArray.length; i ++ ;){
        sendEmailTo(recipientsArray[i])

}