const expect = require('expect')

const utils = require('./utils');
it('should add two numbers', () => {
  var res = utils.add(33, 11);

  //Usamos expect en lugar de hacer la comparacion
  //nostros mismos
  expect(res).toBe(44).toBeA('number');  
});

it('should square the number', () => {
  var res = utils.square(3);

  expect(res).toBe(9).toBeA('number');
});

it('should set firstName and lastName', () => {
  var user = {location: 'Philadelphia', age: 25};
  var res = utils.setName(user, 'Andrew Mead');

  // console.log(res)
  // console.log(user)

  expect(res).toInclude({
    firstName: 'Andrew',
    lastName: 'Mead'
  })
});

// it('should expect some values', () => {
  // toBe y toNotBe son buenos para comparar numeros
  // cadenas de texto, etx
  // expect(12).toNotBe(14)

  // pero para comparar objetos usamos toEqual y toNotEqual
  // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});

  // expect([1,2,3,4]).toExclude(0);
  // expect({
  //   name: 'Andrew',
  //   age: 25,
  //   location: 'Philadelphia'
  // }).toInclude({
  //   age: 23
  // })
// });