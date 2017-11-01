const MongoClient = require('mongodb').MongoClient;
// Hacemos conexion del mongoclient y le pasamos la direccion(local)
// y el nombre de la bd y un callback como segundo parametro
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MondoDB server');
  }
  console.log('Connected to MondoDB server');
  // Agregamos una coleccion y le insertamos datos,
  // pasamos un callback como segundo argumento.
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false,
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Carlos',
    age: 37,
    location: 'Villahermosa'
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert user');
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  // Cerramos base de datos
  db.close();
});