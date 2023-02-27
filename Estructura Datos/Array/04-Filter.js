/* 
El método filter consiste en crear un nuevo array a partir de los elementos originales filtrados mediante una función (callback) que indica la condición a cumplir y es inmutable. Si la condición se cumple, retorna el elemento completo.

Este proceso recibe dos argumentos:

    La función que itera y evalúa si cada elemento del array si cumple con la condición especificada (obligatorio).
    Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this en arrow functions es el objeto global.
*/ 

/* 
La función, que recibe como argumento el método filter, utiliza tres parámetros:

    El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
    El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
    El array que está iterando.
*/

let otherArray = array.filter(function(), thisArg)

const other = array.map(function(element, index, array))

const words = ["spray", "elites", "limit", "apple", "exuberant"]
const newWords = []

for(let i=0; i< words.length; i++){
    const word = words[i]
    if (word.length >= 6){
        newWords.push(word)
    }
}

console.log(newWords) // [ 'elites', 'exuberant' ]
/*
filter() lo que hace es filtrar el array original en base a una condición, los que la cumplan estaran en el nuevo array creado.
.
Por lo tanto filter() es inmutable y el nuevo array creado solamente puede contener:

    cero coincidencias
    todas coincidencias*/

    //Filtrar elementos a partir de la propiedad de un objeto
    const orders = [
        {
          customerName: "Nicolas",
          total: 60,
          delivered: true,
        },
        {
          customerName: "Zulema",
          total: 120,
          delivered: false,
        },
        {
          customerName: "Santiago",
          total: 180,
          delivered: true,
        },
        {
          customerName: "Valentina",
          total: 240,
          delivered: true,
        },
      ]

      const newOrders = orders.filter(order => order.total > 150)

console.log(newOrders) 
 [
  {
    customerName: 'Santiago',
    total: 180,
    delivered: true
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true
  }
]
