let userName = "";
let todos = [];
let timerId = null;

function getReply(command) {
  let lowerCommand = command.toLowerCase().trim();

  if (lowerCommand.startsWith("hello my name is ")) {
    userName = command.substring(17).trim();
    userName =
      userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();

    return `Nice to meet you ${userName}`;
  }

  if (
    lowerCommand === "what is my name?" ||
    lowerCommand === "what is my name"
  ) {
    if (userName === "") {
      return "I don't know your name yet";
    }

    return `Your name is ${userName}`;
  }

  if (lowerCommand.startsWith("add ") && lowerCommand.endsWith(" to my todo")) {
    let todo = command.substring(4, command.length - 11).trim();

    todos.push(todo);

    return `${todo} added to your todo`;
  }

  if (
    lowerCommand.startsWith("remove ") &&
    lowerCommand.endsWith(" from my todo")
  ) {
    let todo = command.substring(7, command.length - 13).trim();

    let index = todos.indexOf(todo);

    if (index === -1) {
      return `${todo} was not found in your todo`;
    }

    todos.splice(index, 1);

    return `Removed ${todo} from your todo`;
  }

  if (lowerCommand === "what is on my todo?") {
    if (todos.length === 0) {
      return "Your todo list is empty";
    }

    return `You have ${todos.length} todos - ${todos.join(" and ")}`;
  }

  if (lowerCommand === "what day is it today?") {
    let today = new Date();

    let day = today.getDate();
    let month = today.toLocaleString("en-US", { month: "long" });
    let year = today.getFullYear();

    return `${day}. of ${month} ${year}`;
  }

  if (lowerCommand.startsWith("what is ")) {
    let calculation = lowerCommand.substring(8).replace("?", "").trim();
    let numbers = calculation.split(" ");

    let firstNumber = Number(numbers[0]);
    let operator = numbers[1];
    let secondNumber = Number(numbers[2]);

    if (operator === "+") {
      return firstNumber + secondNumber;
    }

    if (operator === "-") {
      return firstNumber - secondNumber;
    }

    if (operator === "*") {
      return firstNumber * secondNumber;
    }

    if (operator === "/") {
      if (secondNumber === 0) {
        return "Cannot divide by zero";
      }

      return firstNumber / secondNumber;
    }
  }

  if (lowerCommand.startsWith("set a timer for ")) {
    let minutes = Number(
      lowerCommand
        .substring(16)
        .replace("minutes", "")
        .replace("minute", "")
        .trim(),
    );

    if (isNaN(minutes) || minutes <= 0) {
      return "Please provide a valid timer duration";
    }

    if (timerId !== null) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(
      function () {
        console.log("Timer done");
        timerId = null;
      },
      minutes * 60 * 1000,
    );

    return `Timer set for ${minutes} minutes`;
  }

  if (lowerCommand === "hello" || lowerCommand === "hi") {
    return "Hello! How can I help you?";
  }

  return "Sorry, I don't understand that command";
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 3"));
console.log(getReply("What is 4 * 12"));
console.log(getReply("Set a timer for 4 minutes"));
