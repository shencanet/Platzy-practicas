'use strict';

function myFunction() {
  return (pi = 3.1416);
}

console.log(myFunction());

/*El modo estricto nos permite escribir código más seguro, habilita restricciones a nuestro código, En myFunction() no vamos a poder usar variables no declarada como es el caso de "pi". */