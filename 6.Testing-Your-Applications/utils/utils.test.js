const expect = require('expect')

const utils = require('./utils');
it('should add two numbers', () => {
  var res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');  
});

it('should square the number', () => {
  var res = utils.square(3);

  expect(res).toBe(9).toBeA('number');
});

it('should set firstName and lastName', () => {
  var user = {location: 'Philadelphia', age: 25};
  var res = utils.setName(user, 'Andrew Mead');

  expect(res).toInclude({
    firstName: 'Andrew',
    lastName: 'Mead'
  })
});
// Este es la estructura de la prueba para verificar
// una funcion asincrona funcione correctamente. Se
// le pasa el done, para que la prueba haga el calculo,
// ya que como tiene un segundo de atraso, siempre mandaria
// como valida la prueba.
it('should async add two numbers', (done) => {
  utils.asyncAdd(4,3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should async square number', (done) => {
  utils.asyncSquare(3, (square) => {
    expect(square).toBe(9).toBeA('number');
    done();
  });
});