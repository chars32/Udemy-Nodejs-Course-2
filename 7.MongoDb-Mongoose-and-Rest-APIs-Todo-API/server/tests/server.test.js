const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
<<<<<<< HEAD
<<<<<<< HEAD

// Modificamos el beforeEach para que borre
// todo lo que hay en Todo e inserte los 
// valores de la variable todos.
const todos = [{
  text: 'First test todo'
}, {
  text: 'Second test todo'
}];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
=======
// Borramos los registros de Todo
beforeEach((done) => {
  Todo.remove({}).then(() => done());
>>>>>>> 2ac1d1c26e37d5d49b81086999a1ef301dafcbed
=======
// Borramos los registros de Todo
beforeEach((done) => {
  Todo.remove({}).then(() => done());
>>>>>>> 2ac1d1c26e37d5d49b81086999a1ef301dafcbed
});

describe('POST /todos', () => {
  // Hacemos prueba pasando un text
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err)
        }
<<<<<<< HEAD
<<<<<<< HEAD
        // Modificamos ya que al insertar valor en beforeEach
        // se pasaba por 2 en el length, por lo tanto al find
        // se le pasa el query text para que asi se cumpla la
        // condicion de toBe(1) y toBe(text).
        Todo.find({text}).then((todos) => {
=======

        Todo.find().then((todos) => {
>>>>>>> 2ac1d1c26e37d5d49b81086999a1ef301dafcbed
=======

        Todo.find().then((todos) => {
>>>>>>> 2ac1d1c26e37d5d49b81086999a1ef301dafcbed
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      })
  });
  // Hacemos prueba que verifique que no se grabe si no se pasa valor
  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if(err) {
          return done(err);
        }
<<<<<<< HEAD
<<<<<<< HEAD
        // Modificamos, ya que inicialmente no esperaba nada en el 
        // length pero al insertar 2 elementos en el beforeEach el
        // length aumento a 2, es decir no debe haber mas de dos.
        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
=======

        Todo.find().then((todos) => {
          expect(todos.length).toBe(0);
>>>>>>> 2ac1d1c26e37d5d49b81086999a1ef301dafcbed
=======

        Todo.find().then((todos) => {
          expect(todos.length).toBe(0);
>>>>>>> 2ac1d1c26e37d5d49b81086999a1ef301dafcbed
          done();
        }).catch((e) => done(e));
      });
  });
<<<<<<< HEAD
<<<<<<< HEAD
});
// Nuevo test el cual debe de traer los todos, esto mediante
// el length y el toBe(2)
describe('GET /todos', () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
=======
>>>>>>> 2ac1d1c26e37d5d49b81086999a1ef301dafcbed
=======
>>>>>>> 2ac1d1c26e37d5d49b81086999a1ef301dafcbed
});