const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send([
    {
      name: 'Carlos',
      age: 37
    },
    {
      name: 'Edith',
      age: 40
    },
    {
      name: 'Pedro',
      age: 29
    }
  ])
});

app.listen(3000, ()=> {
  console.log('connected por 3000');
});

module.exports.app = app;