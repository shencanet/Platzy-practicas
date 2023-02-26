//          [10] // PADRE
//    [4]         [20] //nodo
// [2]  [8]    [17]  [170] //HIJOS IZQ DISMINUYE DERC AUMENTA

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
    search(value) {
        let current = this.root;
        while( current && current.value != value ) {//RECORRE  ARBOL
          if( value < current.value) {
            current = current.left;
          } else {
            current = current.right;
          }
        }
        return current;//ENCUANTRA EL VALOR
      

  }

 
  const tree = new BinarySearchTree();

  tree.insert(10);//insertamos root valor 10
 //console.log(tree);//verificamos todo correcto
  tree.insert(20);//hijo derecho 
  //console.log(tree);
  tree.insert(4);//hijo izquierdo
  //console.log(tree);
  tree.insert(2);
  tree.insert(8);
  tree.insert(17);
  tree.insert(170);
  const shen =tree.search(170);
  console.log(shen)