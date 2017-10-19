console.log('starting app.js');

const fs = require('fs');
const os = require('os');
// Using require to load our own file
const notes = require('./notes.js')

console.log(notes.addNote());

console.log('Result: ', notes.add(9, -2));

// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);