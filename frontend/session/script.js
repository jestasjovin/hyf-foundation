//document = > unload

//window and document

// select elements by id
const input = document.getElementById("inputId");
const output = document.getElementById("theDivId");

//change, input ,
input.addEventListener("input", () => {
  output.textContent = input.value; //e.target.value: has to pass e
  //e.target.value
});

output.addEventListener("mouseenter", () => {
  output.style.backgroundColor = "blue";
});

output.addEventListener("mousemove", (event) => {
  output.textContent = `x: ${event.offsetX}, y: ${event.offsetY}`;
});

output.addEventListener("mousedown", () => {
  output.style.transform = "scale(0.5)";
});

output.addEventListener("mouseup", () => {
  output.style.transform = "";
});

//clear
output.addEventListener("mouseleave", () => {
  output.style.backgroundColor = "";
  output.transform = "";
  output.textContent = "The DIV";
});
