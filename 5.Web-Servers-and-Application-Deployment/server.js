const express = require('express');
const hbs = require('hbs');

var app = express();
// app.set sirve para asignar el
// motor de template que queremps usar
// en este caso handlebars 'hbs'
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'Hello Amigos'
  });
});

app.get('/about', (req, res) => {
  // Usamos res.render y pasamos como parametro el 
  // nombre del archivo que deseamos usar, este debe
  // estar dentro de la carpeta views.
  res.render('about.hbs', {
    // Le pasamos valores al template about.hbs
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Error handling this request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});