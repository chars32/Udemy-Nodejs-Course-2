console.log('starting app');

// Use require function to bring the 'fs' and 'os' built-in modules
const fs = require('fs');
const os = require('os');

var user = os.userInfo();

// --- fs options ---

// 1. Option one
// fs.appendFile('greetings.txt', 'Hello World', function(err){
//   if(err) {
//     console.log('Unable to write to file');
//   }
// });

// 2. Option two
fs.appendFileSync('greetings.txt', `Hello ${user.username} !!!`);