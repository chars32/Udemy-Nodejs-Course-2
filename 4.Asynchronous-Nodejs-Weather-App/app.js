// const yargs = require('yargs');
// const geocode = require('./geocode/geocode')

// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

// key: 5c6e0a376369780a3ec70e45f172764e

// latitude: 18.0047349
// longitude: -92.9391078

const request = require('request');
// request a forecast.io
request({
  url: 'https://api.darksky.net/forecast/5c6e0a376369780a3ec70e45f172764e/18.0047349,-92.9391078',
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to Forecast.io server')
  } else if (response.statusCode === 400) {
    console.log('Unable to fetch weather')
  } else if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature)
  }
});