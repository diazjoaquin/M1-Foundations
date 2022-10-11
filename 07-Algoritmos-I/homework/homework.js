'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let factores = [1];
  let i = 2
  while (num !== 1) {
    if (num % i === 0) {
      factores.push(i)
      num = num / i
    } else i += 1;
  }
  return factores;
}
// se puede hacer con un bucle for? 


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // anidación de bucles
  // el primer bucle for va desde 2 hasta 5 (que es el length del array)
  for (let i = 2; i < array.length; i++) {
    for (let j = 0; j <= (array.length - i); j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]
      }
    }
  }
  return array;
}
/*index  0  1  2  3  4 
        [1, 2, 4, 5, 8]
  length del array = 5;

  for (i --> 2 - 4)
  for (j --> 0 - 1)
  en la primera iteracion i = 3
  en la primera iteracion j = 
  
*/

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  /*let index = 0;
  const sort = [];
  while (index < array.length) {
    sort.push(array[index])
    index++;
    sort.sort((a, b) => a - b)
  }
  return sort;*/

  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    var aux = array[i];
    while (j >= 0 && array[j] > aux){
      array[j+1] = array[j]
      j--
    }
    array[j+1] = aux;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  // aqui se recorre el array buscando el menor valor, y lo pusheamos dentro de un nuevo array. 
  /* const selection = [];
  for (let i = 0; i < (array.length - 1); i++) {
    let menor = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[menor]) {
        [array[j], array[menor]] = [array[menor], array[j]]
      }
    }
    selection.push(array[menor]);
  }
  // HARDCODE IS COMING:
  array.sort((a, b) => a - b)
  selection.push(array[array.length - 1])
  return selection; */

  for (let i = 0; i < array.length; i++) {
    let menor = i;
    for (let j = i+1; j < array.length; j++) {
      if (array[j] < array[menor]){
        menor = j;
      }
    }
    if (menor !== i){
      [array[i], array[menor]] = [array[menor], array[i]];
    }
    
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
