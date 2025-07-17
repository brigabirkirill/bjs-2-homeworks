"use strict"
function getArrayParams(...arr) {
  let sum = 0;
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    } 
    sum += arr[i];
  }
  let avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}
console.log(min, max, avg)







function summElementsWorker(...arr) {
  return arr.reduce((acc, currentValue) => {
    acc + currentValue}, 0);
}

function differenceMaxMinWorker(...arr) {
  let a = Math.max(...arr);
  let b = Math.min(...arr);
  let result = a - b;
  return result;
}

function differenceEvenOddWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement; 
}

function averageEvenElementsWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement ++;
    } 
  }
  return sumEvenElement / countEvenElement;
}




function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let newParam = func(...arrOfArr[i]);
    if (newParam > maxWorkerResult) {
      maxWorkerResult = newParam;
    }
  }
  return maxWorkerResult;
}

const arrOfArr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];

console.log(makeWork(arrOfArr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72