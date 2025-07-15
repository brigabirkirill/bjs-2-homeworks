"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2)-4*a*c;
  let eZero = -b/(2*a);
  let ePlusOne = (-b + Math.sqrt(d) )/(2*a);
  let ePlusTwo = (-b - Math.sqrt(d) )/(2*a);
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [eZero];
  } else {
    arr = [ePlusOne, ePlusTwo];
  }
  return arr;
}
console.log(solveEquation());



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = (percent/100)/12;
  let creditBody = amount - contribution;
  let monthPay = creditBody*(percentMonth + (percentMonth/(((1 + percentMonth)**countMonths) - 1)));
  let totalPay = monthPay*countMonths;
  totalPay = parseFloat(totalPay.toFixed(2));
  return totalPay;
}
console.log(calculateTotalMortgage());