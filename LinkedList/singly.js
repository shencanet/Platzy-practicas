/*
Linked List son simplemente un conjunto de nodos 
ordenados que contienen los valores que necesitemos
 (numbers, strings, boolean, etc). 
 Cada uno tiene un valor y una referencia a un 
 siguiente nodo.

   Prepend ⇒ Agregar un nodo al inicio
    Append ⇒ Agregar un nodo al final
    Lookup / Search ⇒ Buscar un nodo
    Insert ⇒ insertar un nodo en la lista
    Delete ⇒ Borrar un nodo

 */
let singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};
class Node {
   constructor(value) {
      this.value;
      this.next = null;
   }
}

class MysinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
}
append(value) {
  const newNode = new Node(value);
  this.tail.next = newNode;
  this.tail = newNode;
  this.length++;
  return this;
  
}

let MysinglyLinkedList = new MysinglyLinkedList(1);
