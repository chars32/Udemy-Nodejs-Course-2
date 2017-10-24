const request = require('request');
const yargs = require('yargs');

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

var encodedAddress = encodeURIComponent(argv.address);

request({
  url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
  json: true
}, (error, response, body)=> {
  // Manejando los errors
  if (error) {
    // si no se puede conectar a los servidores por algun detalle
    // en el URL.
    console.log('Unable to conncect to Google servers.');
  } else if (body.status === 'ZERO_RESULTS'){
    // si la encodedAddress pasada, devuelve el status ZERO_RESULTS
    console.log('Unable to find that address.');
  } else if (body.status === 'OK'){
    // de otra forma imprima la siguiente info.
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
  }
});