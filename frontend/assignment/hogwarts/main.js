const houses = [
  {
    name: "Gryffindor",
    info: "You are brave and not afraid to take risks.",
    color: "red",
  },
  {
    name: "Hufflepuff",
    info: "You are friendly, caring and always there for your friends.",
    color: "yellow",
  },
  {
    name: "Ravenclaw",
    info: "You are curious, love learning new things and like using your brain.",
    color: "blue",
  },
  {
    name: "Slytherin",
    info: "You are ambitious, smart and always have a plan.",
    color: "green",
  },
];

const student = document.querySelector("#student");
const sort = document.querySelector("#sort");
const again = document.querySelector("#again");
const answer = document.querySelector("#answer");

let lastHouse = "";

function findHouse() {
  const name = student.value.trim();

  if (name === "") {
    answer.textContent = "Please enter your name!";
    return;
  }

  let house = houses[Math.floor(Math.random() * houses.length)];

  while (house.name === lastHouse) {
    house = houses[Math.floor(Math.random() * houses.length)];
  }

  answer.innerHTML = `
        <h2>${name} belongs in ${house.name}!</h2>
        <p>${house.info}</p>
    `;

  answer.className = house.color;

  lastHouse = house.name;
  again.disabled = false;
}

sort.addEventListener("click", findHouse);
again.addEventListener("click", findHouse);
