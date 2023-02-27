/*
El método reduce es inmutable y consiste retornar un solo valor del array iterado a partir de una función (callback) que indica de qué manera se itera cada elemento para reducirlo. */

let reducedValue = array.reduce(function(), initialValue)

let reducedValue1 = array.reduce(
    function(acumulator,element, index, array), 
    valorInicial
)

const numbers = [5,4,8,6,2]
let suma = 0

for(let i = 0; i<numbers.length; i++){
  const number = numbers[i]
  suma = suma + number**2
}

console.log(suma) // 145

const numbers = [5,4,8,6,2]

const reducedValue = numbers.reduce((suma, number) => suma + number**2)

console.log(reducedValue) // 125