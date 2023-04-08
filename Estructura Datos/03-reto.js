const fruits = [
    { id: 1, name: 'Lime', quantity: 5 },
    { id: 2, name: 'Apple', quantity: 30 },
    { id: 3, name: 'Pineapple', quantity: 3 },
  ];
  
  const count = fruits.some((fruit) => fruit.quantity > 5);
  console.log(count)

/*Respuesta Correcta: A) true
El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.

En el ejemplo tenemos un arreglo de elementos (fruits) y tenemos una variable asignada a count con la cual estamos utilizando el método some() para validar si el arreglo cumple con la condición implementada, la cantidad sea mayor a 5.

some() ejecuta la función callback una vez por cada elemento presente en el array hasta que encuentre uno donde callback retorna un valor verdadero (true). Si se encuentra dicho elemento, some() retorna true inmediatamente. Si no, some() retorna false.  */