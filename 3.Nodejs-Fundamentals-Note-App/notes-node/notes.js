console.log('Starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  // try and catch works to avoid errors if notes-data-json
  // file doesnt exist
  try {
    var notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {

  }
   // Filtramos para que los titulos no se repitan
  var duplicateNotes = notes.filter((note) => note.title === title);
  // Verificamos que no existan titulos repetidos y
  // de no existir se almacena en notes y se escribe el archivo.
  if (duplicateNotes.length === 0){
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  console.log(`Reading ${title} notes`);
};

var removeNote = (title) => {
  console.log(`Removing ${title} notes`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}