import getNotes from './getNotes';
import outputNotes from './outputNotes';

function deleteNote(index: string) {
  // Get the notes array from localStorage
  const notesArray = getNotes();
  const confirmDelete = confirm('Are you sure you want to delete this note?');

  if (confirmDelete) {
    // Use the index number to splice the corresponding note object from the array
    notesArray.splice(Number(index), 1);

    // Update/Overwrite the array in localStorage
    localStorage.setItem('notes', JSON.stringify(notesArray));

    // Call outputNotes
    outputNotes();
  }
}

export default deleteNote;