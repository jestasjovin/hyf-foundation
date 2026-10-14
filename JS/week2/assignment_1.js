
  // Flight booking
  function getFullName(firstName, surname, useFormalName = false) {
    const first = firstName.trim();
    const last = surname.trim();

    if (first === "" || last === "") return "";

    const name = `${first} ${last}`;
    return useFormalName ? `Lord ${name}` : name;
  }

  const fullName1 = getFullName("Musa", "Kato");
  const fullName2 = getFullName("Lars", "Nielsen", true);
  console.log(fullName1, fullName2);
