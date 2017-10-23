// Llamamos al paquete request.
const request = require('request');

// Utilizamos el request para traer la info
// mediante al api de google.
request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
  json: true
}, (error, response, body)=> {
  // Format JSON - Pretty Print Objects
  console.log(JSON.stringify(body, undefined, 2))
})