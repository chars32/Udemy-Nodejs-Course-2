const yargs = require('yargs');
const axios = require('axios');

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
var geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`

// Aqui usamos el geocode para saber las coordenadas
axios.get(geocodeUrl).then((response) =>{
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address.')
  }
  console.log(response.data.results[0].formatted_address);
  
  // Aqui llamamos a weather para saber la temperatura
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/5c6e0a376369780a3ec70e45f172764e/${lat},${lng}`
  return axios.get(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`)

  // Manejando errores
}).catch((e) => {
  if(e.code === "ENOTFOUND") {
    console.log('Unable to connect to API servers.');
  } else {
    console.log(e.message)
  }
})