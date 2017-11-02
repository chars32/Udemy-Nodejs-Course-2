var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {
  useMongoClient: true
});

var Todo = mongoose.model('Todo', {
  text: {
    // Aplicamos los validadores, type y defaults.
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var otherTodo = new Todo({
//   text: '  Edit this video  '
// });

// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save todo', e);
// });

var User = mongoose.model('User', {
  email: {
    // Aplicamos validadores, types y defaults
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

var user = new User({
  email: '   charsalgo@gmail.com  '
});

user.save().then((doc) => {
  console.log('Email saved!!!', doc);
}, (e) => {
  console.log('Unable to save email', e);
});