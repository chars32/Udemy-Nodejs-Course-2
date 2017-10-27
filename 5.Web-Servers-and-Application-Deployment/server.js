const express = require('express');
const hbs = require('hbs');

var app = express();
// registerPartials sirve para declarar donde estaran
// los fragmentos de archivos hbs que se repiten en 
// diferentes templates
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// registerHelper lo utilizamos para agregar funciones
// que pueden aceptar argumentos(screamIt) o no y ayudan a devolver
// un valor.
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