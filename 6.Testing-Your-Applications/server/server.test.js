// Utilizamos supertest que funciona como el request del
// server pero es para pruebas
const request = require('supertest');
const expect = require('expect');

// Llamamos a la variable app del archivo server
var app = require('./server').app;

// esta es la estructura de una prueba hecha
// con supertest. Requiriendo la libreria expect
// podemos usar todos los atributos de ella, tales
// como .toBeA, .toInclude, etc
it('should return hello word response', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({
        error: 'Page not found.'
      })
    })
    .end(done);
});

it('should return my user object', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Carlos',
        age: 37
      })
    })
    .end(done);
})