var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// cambios para Heroku
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', {
  useMongoClient: true
});

module.exports = {
  mongoose 
}