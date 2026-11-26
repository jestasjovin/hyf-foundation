console.log("Fetching !!!");
let people = [];

fetch("http://api.open-notify.org/astros.json")
  .then((result) => result.json())
  .then((data) => {
    console.log(`We found:`, data.people);
    people = data.people;

    const container = document.getElementById("astronauts");
    const tableBody = document.getElementById("astronautsTable");

    const heading = document.createElement("h1");
    heading.textContent = `There are ${people.length} astronauts in space, they are:`;
    container.appendChild(heading);

    people.forEach((person, index) => {
      const austronautName = document.createElement("p");
      austronautName.textContent = `${index + 1}. ${person.name}`;
      container.appendChild(austronautName);

      const row = document.createElement("tr");
      // Create the number column
      const numberCell = document.createElement("td");
      numberCell.textContent = index + 1;

      // Create the name column
      const nameCell = document.createElement("td");
      nameCell.textContent = person.name;

      // Add cells to the row
      row.appendChild(numberCell);
      row.appendChild(nameCell);

      // Add row to the table
      tableBody.appendChild(row);
    });
  });
