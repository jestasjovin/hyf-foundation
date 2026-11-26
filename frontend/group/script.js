console.log("DOM Manipulation ZONE !!!");

//TODO get elemets by id/ tag name
const list = document.querySelector("ol");
const items = document.querySelectorAll("ol li");
const output = document.querySelector("#output");

console.log(list);
console.log(items);
console.log(output);

document.querySelector("#removeBtn").addEventListener("click", () => {
  console.log("Removing Item");
  const milk = items[1];
  milk.remove();
  output.textContent = "Milk removed.";
});

document.querySelector("#styleBtn").addEventListener("click", () => {
  console.log("Removing Styling Item");
  const pepsi = items[2];
  pepsi.style.backgroundColor = "blue"; //editing fro here
  pepsi.classList.toggle("important"); // my css code
  output.textContent = "Pepsi Max styled.";
});

document.querySelector("#familyBtn").addEventListener("click", () => {
  console.log("Showing parent and Children Item");
  const salad = items[3];
  const parent = salad.parentElement;
  const children = list.children;

  const names = Array.from(children)
    .map((li) => li.textContent)
    .join(", ");

  console.log("Parent:", parent);
  console.log("Children:", children);

  output.textContent =
    "Parent tag: " + parent.tagName + " | Children: " + names;
});
