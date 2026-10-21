// Flight booking
function getFullName(firstName, surname, title = undefined) {
  const first = firstName.trim();
  const last = surname.trim();

  if (first === "" || last === "") return "";

  const name = `${first} ${last}`;
  return title ? `${title} ${name}` : name;
}

const fullName1 = getFullName("Musa", "Kato", "Dr");
const fullName2 = getFullName("Lars", "Nielsen", "Lord");
const fullName3 = getFullName("Marie", "Nielsen", "Miss");
console.log(fullName1, fullName2, fullName3);
