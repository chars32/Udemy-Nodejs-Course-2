console.log('starting app.js');

const fs = require('fs');
const os = require('os');
// Including 3rd party module(npm)
const _ = require('lodash');
// Using require to load our own file
const notes = require('./notes.js')

// console.log(_.isString(true));
// console.log(_.isString('Carlos'));
let filterArray = _.uniq(['carlos', 1, 'carlos', 1, 2, 3, 4])
console.log(filterArray);

// console.log(notes.addNote());

// console.log('Result: ', notes.add(9, -2));

// var user = os.userInfo();

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);