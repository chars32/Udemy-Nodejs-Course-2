//JSON.stringify -> sirve para pasar un objeto a formato JSON.
//JSON.parse -> sirve para pasar de JSON a objeto.

// var obj = {
//   name: 'Carlos'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Carlos", "age": "37"}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
}
// Write notes.json and stringify
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

// Read notes.json and parse
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);

// para que no se cicle en la consola usar
// nodemon -e js json.js 
// donde: "e js" = extension js