import DB from './DB';

class Note {
  constructor(public text: string, public date: string) {
    this.text = text;
    this.date = date;
  }

  save() {
    const rawNotes = localStorage.getItem('notes');
    const notes = JSON.parse(rawNotes || '[]');

    notes.push(this);

    localStorage.
  }
}

export default Note;