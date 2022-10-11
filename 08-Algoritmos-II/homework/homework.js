'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // elijo un pivote:
  let right = [];
  let left = [];
  let equal = []
  if (array.length <= 1){
    return array;
  } else {
    let pivot = array[array.length -1];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > pivot){
        right.push(array[i]);
      } else if (array[i] < pivot){
        left.push(array[i]);
      } else equal.push(array[i])
    }
    return quickSort(left).concat(equal, quickSort(right));
  }    
}

console.log(quickSort([5, 1, 4, 2, 8])) 
console.log(quickSort([10, 10, 16, 12])) 
console.log(quickSort([10, -2, -7, 4])) 


  // cuando array.length sea < 1 (stopper condition)
    // al final concatenamos los pivotes?

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //  cuando array.length sea < 1 (stopper condition)
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
