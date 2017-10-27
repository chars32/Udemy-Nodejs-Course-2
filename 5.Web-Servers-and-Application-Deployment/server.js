// importamos express
const express = require('express');
// Inicializamos express en la variable app
var app = express();

// asi declaramos una ruta
app.get('/', (req, res) => {
  res.send({
    name: 'Carlos',
    likes: [
      'football',
      'Pool'
    ]
  })
});

app.get('/about', (req, res) => {
  res.send('About Page')
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Error handling this request'
  });
});
// Escuchamos a express (instanciado en app) en el puerto 3000
app.listen(3000);