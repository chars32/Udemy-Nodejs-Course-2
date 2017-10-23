console.log('Starting app');

// La funcion setTimeout es un ejemplo basico de 
// funciones asincronas, ya que no detienen el 
// flujo del codigo (non blocking)
setTimeout(() => {
  console.log('Inside of callback');
}, 2000);

setTimeout(() => {
  console.log('Second setTimeout');
}, 0);

console.log('Finishing up');