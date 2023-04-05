const getList = ([x, ...y]) => [x, y]
const getUser = user => { name: user.name, age: user.age }

const list = [1, 2, 3, 4]
const user = { name: "Lydia", age: 21 }

console.log(getList(list)) //🤔?
console.log(getUser(user)) //🤔?

/*Respuesta Correcta: A) [1, [2, 3, 4]] y SyntaxError

    En la función getList:

    Tenemos una desestructuración de arreglos en la lista de parámetros de la función y además y es un parámetro de tipo REST. Por ende, al pasar el argumento list, x será igual al primer elemento del arreglo, ósea, 1. y como es de tipo REST será un arreglo con todos los elementos restantes de list, ósea, [2, 3, 4]. La función regresa un nuevo arreglo [x, y], entonces tendríamos un arreglo anidado y como resultado [1, [2, 3, 4]].
    En la función getUser:

    Recibe un único parámetro user que es un objeto y luego lo regresa. Las funciones de tipo flecha tiene la característica denominada return implícito con esto se logra escribir funciones más compactas y de una sola línea, pero cuando intentamos usar un return implícito para devolver un objeto es obligatorio usar paréntesis para envolver al objeto en cuestión, sino hacemos esto el interprete nos arrojará un SyntaxError.



Para que el return implícito tenga sentido tendríamos que usar paréntesis para envolver el objeto:

  const getUser = user => ({ name: user.name, age: user.age })

 const user = { name: "Lydia", age: 21 }

 console.log(getUser(user)); // {name: "Lydia", age: 21}  */