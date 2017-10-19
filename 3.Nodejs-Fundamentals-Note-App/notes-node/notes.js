console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Adding note', title, body);
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