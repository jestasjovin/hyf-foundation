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

  console.log("Note not found");
}

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`,
    );
  }
}

// Extra features
function deleteNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      notes.splice(i, 1);
      return;
    }
  }

  console.log("Note not found");
}

function editNote(id, newContent) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      notes[i].content = newContent;
      return;
    }
  }

  console.log("Note not found");
}

// Test
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("MAke food", 3);

console.log(getNote(1));
logOutNotesFormatted();

deleteNote(3);
logOutNotesFormatted();

editNote(2, "Do laundry if you not tired");
logOutNotesFormatted();
