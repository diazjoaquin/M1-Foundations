'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var numInv = num.split('').reverse().join('')
  let result = 0;
  let decimal = 0;
  for (let i = 0; i < numInv.length; i++){
     result = numInv[i]  * (2 ** i)
     decimal += result;
  }
  return decimal;
}

function DecimalABinario(num){
  // tu codigo aca
  let result = 0;
  let binario = '';
  while (num > 0){
    result = num % 2;
    binario += result.toString();
    num = Math.floor(num / 2);
  }
  return binario.split('').reverse().join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}

function BinarioADecimal(num) {
  // tu codigo aca
  var sum = 0;
  num = num.split("").reverse();
  num.forEach((num,i) => (sum += num * 2 ** i));
  return sum;
}
