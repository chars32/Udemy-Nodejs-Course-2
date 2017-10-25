const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/5c6e0a376369780a3ec70e45f172764e/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
     callback('Unable to connect to Forecast.io server')
    } else if (response.statusCode === 400) {
     callback('Unable to fetch weather')
    } else if (!error && response.statusCode === 200) {
     callback(undefined, {
       temperature: body.currently.temperature,
       apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
}

module.exports.getWeather = getWeather;