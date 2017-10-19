console.log('Starting notes.js');

const fs = require('fs');

// -------------- Funciones auxiliares ----------------------
// Traemos las notas si existen en el archivo (try/catch)
// y las parseamos (parse)
var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};
// Guardamos las notas en formato JSON
var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};
// -------------------------------------------------------------

// Funcion para agregar nota
var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log(`Reading ${title} notes`);
};
// Funcion para borrar nota
var removeNote = (title) => {
  var notes = fetchNotes();
  var filterNotes = notes.filter((note) => note.title !== title);
  saveNotes(filterNotes);

  return notes.length !== filterNotes.length;
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}