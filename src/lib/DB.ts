class DB {
  static getNotes() {
    const rawNotes = localStorage.getItem('notes');
    const notes = JSON.parse(rawNotes || '[]');

    return notes;
  }

  static saveNotes(notesArray: [{ text: string, date: string }]) {
    localStorage.setItem('notes', JSON.stringify(notesArray))
  }
}