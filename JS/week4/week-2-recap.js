function getTicketPrice(age, isStudent) {
  if (age < 12) {
    return 0;
  } else if (isStudent || age >= 65) {
    return 60;
  }
  return 100;
}

const price = getTicketPrice(25, true);
console.log(price); // 60

function getShipping(total, isMember = false) {
  if (total >= 500 || isMember) {
    // console.log(0);
    return 0;
  } else {
    // console.log(49);
    return 49;
  }
}

function getOrderTotal(basket, isMember = false) {
  const shipping = getShipping(basket, isMember);
  console.log("Total: " + (basket + shipping));
}

getOrderTotal(300); // want: Total: 349
getOrderTotal(650); // want: Total: 650
getOrderTotal(250, true); // want: Total: 650

function getDeliveryFee(orderTotal, distanceKm, isMember, hour) {
  let cost = 29;

  if (!canDeliver(distanceKm, hour)) {
    return "CAN NOT DELIVER";
  }

  if (isMember || orderTotal > 300) {
    return 0;
  }

  if (distanceKm > 5) {
    cost += 20;
  }

  if (hour >= 17 && hour < 20) {
    cost += 10;
  }

  return cost;
}

function canDeliver(km, hour) {
  return km < 15 && hour > 11 && hour < 22;
}

console.log(getDeliveryFee(250, 3, false, 12)); //29
console.log(getDeliveryFee(250, 8, false, 18)); // 59
console.log(getDeliveryFee(150, 18, true, 22)); // 0
console.log(getDeliveryFee(320, 2, false, 18)); // 0

function getProgressBar(percent, step = 10) {
  if (percent < 0 || percent > 100) {
    return "ERROR : Progress can not be negative or more than 100";
  }

  const progress = [];
  const count = Math.floor(percent / step);

  for (let i = 0; i < 100; i++) {
    if (i < count) {
      progress.push("#");
    } else {
      progress.push("-");
    }
  }

  return `[${progress.join("")}] ${percent}%`;
}

// console.log(getProgressBar(0));
// // [----------] 0%
// console.log(getProgressBar(30));
// // [###-------] 30%
// console.log(getProgressBar(75));
// // [#######---] 75%
// console.log(getProgressBar(100));
// // [##########] 100%

// for (let i = 0; i <= 100; i += 1) {
//   console.log(getProgressBar(i, 1));
// }

// setInterval(getProgressBar(i, 1), 500);

// Simulation parameters
const totalTimeMs = 5000; // finish in 5 seconds
const steps = 100;
const intervalTime = totalTimeMs / steps;

let i = 0; // starting percent

const intervalId = setInterval(() => {
  process.stdout.write(`\r${getProgressBar(i, 1)}`);
  i++;

  if (i > 100) {
    clearInterval(intervalId);
    console.log("\nFinish download ✅");
  }
}, intervalTime);

let visitors = 0;
function openShop() {
  visitors = visitors + 1;
  console.log("Welcome, visitor " + visitors);
}
function closeShop() {
  let goodbye;
  if (visitors > 0) {
    goodbye = "Bye, " + visitors + " visitors!";
  }
  console.log(goodbye);
}

openShop();
openShop();
closeShop();
