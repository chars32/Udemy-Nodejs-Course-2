const express = require('express');

var app = express();
// Usamos middleware para configurar como 
// funcionara la app, en este caso le decimos 
// que vaya a la carpeta public y que utilice 
// los archivos html para ingresar a sus contenidos
// ejemplo: localhost:3000/help.html
app.use(express.static(__dirname + '/public'));

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

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});