// El archivo se dividio en varios otros.
var express = require('express');
// BodyParser manda JSON al servidor.
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
// Middleware bodyparser
app.use(bodyParser.json());
// Ruta para hacer POST
app.post('/todos', (req, res) => {
  // Aqui utilizamos el model Todo de todo.js
  var todo = new Todo({
    text: req.body.text
  });
  // Guardamos
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});