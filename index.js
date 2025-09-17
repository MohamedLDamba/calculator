const { getNumber, getOperator, doMath } = require("./helpers.js");
const { validOperators } = require("./config.js");

function runCalculator() {
  const op = getOperator(validOperators);
  const first = getNumber("first");
  const second = getNumber("second");
  console.log(doMath(first, second, op));
}

runCalculator();
