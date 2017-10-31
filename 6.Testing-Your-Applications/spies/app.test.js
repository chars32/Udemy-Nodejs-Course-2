// Spy nos sirve para llamar una funcion sin necesidad
// de que haga su proceso. En este ejemplo creamos un
// soy que supuestamente llama a la db.js, pero como no
// tenemos una, solo se le pasan los parametros y spy junto
// con rewire redireccionan o algo asi.
const expect = require('expect');
const rewire = require('rewire');
var app = rewire('./app.js');

describe('App', () => {
  // ----test inicial-------
  it('should call the spy correctly', () => {
    // Creamos el spy
    var spy = expect.createSpy();
    spy('Andrew', 25);
    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  });
  // -----------------------

  // Creamos la db
  var db = {
    // Creamos el spy
    saveUser: expect.createSpy()
  };
  // Le seteamos la db a la app con rewire, asi
  // no entrara a nuestro db.js
  app.__set__('db', db);
  
  // Hacemos el test
  it('should call saveUser with user object', () => {
    var email = 'andrew@example.com';
    var password = '123abc';

    // Aqui mandamos a llamar al metodo handleSignup del app.js
    // pero al llegar al db.saveUser, usaremos el que declarmos
    // en este archivo.
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});