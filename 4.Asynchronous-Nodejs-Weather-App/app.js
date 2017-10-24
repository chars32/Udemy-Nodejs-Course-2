const request = require('request');
const yargs = require('yargs');

// empezamos constante yargs
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

// variable que recibe el valor que pasamos por consola
// y lo formatea para que los espacios en blanco se 
// llenen con %
var encodedAddress = encodeURIComponent(argv.address);

request({
  // pasamos dinamicamente el valor de la direccion
  // deseada para buscar.
  url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
}, (error, response, body)=> {
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
})