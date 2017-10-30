// Este archivo (utils.test.js) se crea para que cuando le digamos a
// mocha que haga las pruebas, aqui sea dondelas busque. Esto lo 
// configuramos en el package.json, en scripts.

const utils = require('./utils');
// No necesitamos importar mocha. Con poner it(), se llama.
it('should add two numbers', () => {
  var res = utils.add(33, 11);
  
  if (res !== 44) {
    throw new Error(`Expected 44, but got ${res}`);
  }
});

it('should square the number', () => {
  var res = utils.square(3);

  if ( res !== 9) {
    throw new Error(`Expected 9, but got ${res}`);
  }
});