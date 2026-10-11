const firstWords = [
  "Easy",
  "Smart",
  "Fast",
  "Cool",
  "Happy",
  "Super",
  "Quick",
  "Bright",
  "Future",
  "Awesome",
];

const secondWords = [
  "Tech",
  "Labs",
  "Solutions",
  "Systems",
  "Company",
  "Works",
  "Apps",
  "Digital",
  "Cloud",
  "Studio",
];

const randomNumber = Math.floor(Math.random() * 10);

const startupName =
  firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log(
  'The startup: "' +
    startupName +
    '" contains ' +
    startupName.length +
    " characters"
);