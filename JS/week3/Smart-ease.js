const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }

  return "Note not found";
}

function logOutNotesFormatted() {
  let result = "";

  for (let i = 0; i < notes.length; i++) {
    result += `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}\n`;
  }

  return result;
}

function deleteNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      notes.splice(i, 1);
      return "Note deleted";
    }
  }

  return "Note not found";
}

function editNote(id, newContent) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      notes[i].content = newContent;
      return "Note updated";
    }
  }

  return "Note not found";
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("MAke food", 3);

console.log(getNote(1));
console.log(logOutNotesFormatted());

deleteNote(3);
console.log(logOutNotesFormatted());

editNote(2, "Do laundry if you not tired");
console.log(logOutNotesFormatted());
