function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element > max) {
      max = element;
    }

    if (element < min) {
      min = element;
    }
    
    sum += element;

  }

  const avg = arr.length > 0 ? sum / arr.length : 0;
  const average = parseFloat(avg.toFixed(2));

  return { min: min, max: max, avg: average };
}

function summElementsWorker(...arr) {
  const sumNumbers = arr.reduce((sum, value) => {
    return sum + value;
  }, 0);

  return sumNumbers;
}

function differenceMaxMinWorker(...arr) {
  
  if (arr.length > 0) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    
    return max - min;
  } else {
    return 0;
  }

}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (const value of arr) {
    if (value % 2 === 0) {
      sumEvenElement += value;
    } else {
      sumOddElement += value;
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length > 0) {
    for (const value of arr) {
      if (value % 2 === 0) {
        sumEvenElement += value;
        countEvenElement++;
      }
    }
  } else {
    return 0;
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let currentResult = 0;

  for (let value of arrOfArr) {
    currentResult = func(...value);

    if (currentResult > maxWorkerResult) {
      maxWorkerResult = currentResult;
    }
  }
  
  return maxWorkerResult;
}