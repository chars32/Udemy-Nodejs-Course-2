// Si nada mas es un argumento, no son necesarios los parentesis.
// Si se va a retornar un valor se puede usar el metodo aqui visto.

var square = x => x*x;
console.log(square(9));

// Arrow functions vs Normal Functions
var user = {
  name: 'Andrew',
  sayHi: () => {
    // Las arrow functions no bindean el this a los valores del objeto
    // lo hace al this global, asi mismo los arguments.
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    // Las funciones normales si obtiene el bind this del 
    // objeto donde se encuentran, asi mismo los argumentos que se le pasan.
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

// user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);