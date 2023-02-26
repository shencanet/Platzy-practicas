//          [10] // PADRE
//    [4]         [20] //nodo
// [2]  [8]    [17]  [170] //HIJOS

class Node {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null; //NODO PADRE 1 NODO
    }
    insert(value) {
      const newNode = new Node(value); //NODO A INSERTAR
      if (this.root === null) {//SI YA EXISTE NODO CREA HIJOS SI NO SE CONVIERTE NODO PADRE

        this.root = newNode;// CREA EL NODO PADRE ROOT

      } else {// YA EXISTE ROOT CREA HIJOS
        let currentNode = this.root;//RECORRE ARBOL
        while (true) {
          if (value < currentNode.value) {
            if (!currentNode.left) {//LADO IZQUIERDO HIJO DECREMENTA VALOR
              currentNode.left = newNode;//VALIDA QUE NO EXISTA NODO LADO IZQUIEDO
              return this;
            }
            currentNode = currentNode.left;
          } else {//LADO DERECHO HIJO INCREMENTA VALOR
            if (!currentNode.right) {//VALIDA QUE NO EXISTA NODO LADO DERECHO "!"

              currentNode.right = newNode;
              return this;
            }
            currentNode = currentNode.right;
          }
        }
      }
    }
  }
  
  const tree = new BinarySearchTree();