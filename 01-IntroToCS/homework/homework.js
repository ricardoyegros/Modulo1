'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let result = [];
  let arrayOfNum = [...num + ""];
  let arrayInReverse = arrayOfNum.reverse();
  for (let i = 0; i < arrayInReverse.length; i++) {
    let step = 2 ** i * arrayInReverse[i];
    result.push(step);
  }
  return result.reduce((a,b) => a + b);
}

function DecimalABinario(num) {
  // tu codigo aca
  let n = [];
  let a = num;
  while (Math.floor(a / 2) > 0) {
    let middleResult = (a % 2);
    n.unshift(middleResult);
    a = Math.floor(a / 2);
    if(Math.floor(a / 2) === 0) {
        n.unshift(1);
    }
  }
  return n.join("");
  }

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}