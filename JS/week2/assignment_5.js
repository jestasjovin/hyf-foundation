
const boughtCandyPrices = [];
const amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) {
  let pricePerGram = 0;

  if (candyType === "sweet") {
    pricePerGram = 0.5;
  } else if (candyType === "chocolate") {
    pricePerGram = 0.7;
  } else if (candyType === "toffee") {
    pricePerGram = 1.1;
  } else if (candyType === "chewing-gum") {
    pricePerGram = 0.03;
  } else {
    console.log("Unknown candy type");
    return;
  }

  if (weight <= 0) return;

  boughtCandyPrices.push(weight * pricePerGram);
}

function canBuyMoreCandy() {
  let spent = 0;

  for (const price of boughtCandyPrices) {
    spent += price;
  }

  return spent < amountToSpend;
}

addCandy("sweet", 12);
addCandy("toffee", 8);
addCandy("chewing-gum", 20);

console.log(`Budget: ${amountToSpend.toFixed(2)} kr`);

console.log(
  canBuyMoreCandy()
    ? "You can buy more, so please do!"
    : "Enough candy for you!"
);
