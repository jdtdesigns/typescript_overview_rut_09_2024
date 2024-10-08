import { addNote } from './lib/app';

const noteForm = document.querySelector('#note-form');

noteForm?.addEventListener('click', addNote);