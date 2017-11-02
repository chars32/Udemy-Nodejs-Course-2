var mongoose = require('mongoose');

// mongoose funciona con callbacks por lo cual hacemos
// este truco para que funcione con promesas
mongoose.Promise = global.Promise;
// nos conectamos a la bd con mongoose
mongoose.connect('mongodb://localhost:27017/TodoApp', {
  useMongoClient: true
});
// declaramos nuestro modelo
var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});
// aqui pasamos un nuevo document a la coleccion
// cumpliendo con el modelo declarado arriba
var newTodo = new Todo({
  text: 'Cook dinner'
});
// asi la guardamos en la bd, usando promesas
newTodo.save().then((doc) => {
  console.log('Save todo', doc);
}, (e) => {
  console.log('Unable to save todo', e);
});

var otherTodo = new Todo({
  text: 'Learning MongoDB',
  completed: true,
  completedAt: 12345
});

otherTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save todo', e);
});