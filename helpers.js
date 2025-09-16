const rs = require("readline-sync");

function getOperator(arrOperator) {
  while (true) {
    let operation = rs.question(
      `What operation would you like to perform? ${arrOperator.join(", ")}: `
    );
    if (arrOperator.includes(operation)) {
      return operation;
    } else {
      console.log("that is not a valid operation");
    }
  }
}
// const op = getOperator(validOperators);

function getNumber(order) {
  while (true) {
    const num = rs.question(`please enter the ${order} number`);
    const isValidNumber = !(isNaN(num) || num === "");
    if (isValidNumber) {
      return Number(num);
    } else {
      console.log("this is not a valid number");
    }
  }
}
// let first = getNumber("first");
// let second = getNumber("second");

const operation = {
  "+": (first, second) => first + second,
  "-": (first, second) => first - second,
  "*": (first, second) => first * second,
  "/": (first, second) => first / second,
};

function doMath(first, second, op) {
  return operation[op](first, second);
}
// console.log(doMath(first, second));

module.exports = { getNumber, getOperator, doMath };
