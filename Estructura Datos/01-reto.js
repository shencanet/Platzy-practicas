

const person = [ {
  name: 'Lydia',
  age: 21,
},{
    name: 'sandra',
    age: 99,
}];

const person2 = {
    name: 'Lydia',
    age: 21,
};

for (const [x, y] of Object.entries(person)) {
  console.log(x, y); //🤔?
}

for (const [x, y] of Object.entries(person2)) {
    console.log(x, y); //🤔?
  }


console.log("fUERA DEL FOR");
console.log(person2); //🤔?

/*Respuesta Correcta: A) name Lydia y age 21
El método entries del constructor Object regresa un arreglo anidado donde cada sub arreglo corresponde a la llave y valor del objeto:

  [ [ "name", "Lydia" ], [ "age", 21 ] ]  



Con el bucle for...of iteramos sobre el objeto desestructurando los valores con la sintaxis [x, y].

El primer sub arreglo es [ "name", "Lydia" ] donde x toma el valor name y y toma el valor Lydia.

El segundo arreglo es [ "age", 21 ] donde x toma el valor age y y toma el valor 21. */