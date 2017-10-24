// Llamamos al paquete request.
const request = require('request');

// Utilizamos el request para traer la info
// mediante al api de google.
request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
  json: true
}, (error, response, body)=> {
  // Traemos valores recorriendo el body del request,
  // response nos da todo el objeto en general desde el status code,
  // error nos muestra si hay algun error.
  console.log(`Address: ${body.results[0].formatted_address}`);
  console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
  console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
})