console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

// Con process.argv podemos pasar
// un argumento mediante la consola
console.log(process.argv)
var command = process.argv[2];
console.log('Command:', command);

if (command === 'add') {
  console.log('adding new note');
}else if (command === 'list') {
  console.log('listing all notes');
}else if(command === 'read') {
  console.log('Reading note');
}else if(command === 'remove'){
  console.log('Removing note');
}else{
  console.log('command not recognized');
}