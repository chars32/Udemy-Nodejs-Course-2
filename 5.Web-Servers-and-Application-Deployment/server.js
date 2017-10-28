const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
// Con app.use declaramos un middleware, le pasamos 3
// argumentos (req, res, next), los dos primeros son 
// ya conocidos, pero el 3ero (next) sirve para avanzar
// al siguiente middleware, en caso que exista mas de uno 
// como en el siguiente ejemplo.
app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`
  console.log(log)
  
  fs.appendFile('server.log', log+'\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log')
    }
  })
  next();
});

app.use((req, res, next) => {
  res.render('maintance.hbs');
});
// OJO --- los middlewares se ejecutan segun su aparicion
// en el codigo, es por eso que este lo bajamos para que 
// cuando ingrese a una direccion con terminacion .html
// tambien se vea afectado por los dos de arriba.
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
})

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Hello Amigos'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});