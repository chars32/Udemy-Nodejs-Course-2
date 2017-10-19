console.log('Starting notes.js');

// module is an object that exist in all our files
// module.exports is a property(object) that we are looking for
// because in this is all information we export to another file.
module.exports.addNote = () => {
  console.log('addNote');
  return 'New note';
}

module.exports.add = (a, b) => {
  return a+b
}