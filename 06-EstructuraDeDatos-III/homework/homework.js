"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/



class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    var newTree = new BinarySearchTree(value);
    if (value > this.value) {
      if (!this.right) {
        this.right = newTree;
      } else {
        this.right.insert(value);
      }
    } else {
      if (!this.left) {
        this.left = newTree;
      } else {
        this.left.insert(value);
      }
    }
  }

  size() {
    if (!this.left && !this.right)
      return 1;
    else if (this.left && this.right)
      return 1 + this.left.size() + this.right.size();
    else if (this.left)
      return 1 + this.left.size();
    else if (this.right)
      return 1 + this.right.size();
  }

  contains(value) {
    if (this.value === value) return true;
    if (value < this.value){
        if (!this.left) return false;
        else return this.left.contains(value);
      } else {
        if (!this.right) return false;
        else return this.right.contains(value);
      }

    /*return value < this.value
      ? this.left
        ? this.left.contains(value)
        : false
      : this.rigth
      ? this.rigth.contains(value) : false; */
    }

  depthFirstForEach(cb, metodo) {
    if (!metodo || metodo === 'in-order'){
      if (this.left) this.left.depthFirstForEach(cb, metodo)
      cb(this.value)
      if (this.right) this.right.depthFirstForEach(cb, metodo)
    } else if (metodo === 'pre-order'){
      cb(this.value)
      if (this.left) this.left.depthFirstForEach(cb, metodo)
      if (this.right) this.right.depthFirstForEach(cb, metodo)
    } else if (metodo === 'post-order'){
      if (this.left) this.left.depthFirstForEach(cb, metodo)
      if (this.right) this.right.depthFirstForEach(cb, metodo)
      cb(this.value)
    }

  }

  breadthFirstForEach(cb, array) {
    if (!array) var array = [];
    // partimos desde el root, y preguntamos si existen nodos a la izq y a la derecha.
    // si las condiciones son true, pusheo esos subarboles dentro de un array.
    if (this.left) array.push(this.left);
    if (this.right) array.push(this.right);
    cb(this.value)
    // el callback pushea this.root dentro de un array. Esto lo vemos en el test.
    if(array.length > 0) array.shift().breadthFirstForEach(cb, array)
    // si los alguno de los if anteriores fue true, dentro del array tendremos nuevos subarboles. Por lo tanto preguntamos si el length es > 0. De ser asi pusheamos el primer valor del array, que correspondería al subarbol izq si la condicion fue true. y le aplicamos la recursión.

  }
}


  







// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
