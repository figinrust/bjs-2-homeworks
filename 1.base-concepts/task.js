"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let discriminant = Math.pow(b, 2) - 4 * a * c

  if (discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant))/(2*a)
    let root2 = (-b - Math.sqrt(discriminant))/(2*a)

    arr.push(root1)
    arr.push(root2)

  } else if (discriminant == 0) {
    let root1 = -b/(2*a)
    arr.push(root1)

  } else if (discriminant < 0) {
    return arr
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let rateMonth = percent / 100 / 12
  let creditAmount = amount - contribution

  if (creditAmount <= 0) return 0

  let everyMontPay = creditAmount * (rateMonth + (rateMonth / (((1 + rateMonth) ** countMonths) - 1)))

  let allAmountPay = everyMontPay * countMonths

  let totalAmountPay = parseFloat(allAmountPay.toFixed(2))

  return totalAmountPay
}
