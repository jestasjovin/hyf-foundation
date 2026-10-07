const peterVolume = 8 * 10 * 10;
const peterGardenSize = 100;
const peterHousePrice = 2500000;

const peterExpectedPrice =
  peterVolume * 2.5 * 1000 + peterGardenSize * 300;

if (peterHousePrice > peterExpectedPrice) {
  console.log("Peter is paying too much");
} else {
  console.log("Peter is paying too little");
}

const juliaVolume = 5 * 11 * 8;
const juliaGardenSize = 70;
const juliaHousePrice = 1000000;

const juliaExpectedPrice =
  juliaVolume * 2.5 * 1000 + juliaGardenSize * 300;

if (juliaHousePrice > juliaExpectedPrice) {
  console.log("Julia is paying too much");
} else {
  console.log("Julia is paying too little");
}