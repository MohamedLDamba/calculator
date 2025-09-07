const rs = require("readline-sync");
function calculator() {
  let operation = rs.question(
    "What operation would you like to perform? (+, -, *, /): "
  );

  if (
    operation === "/" ||
    operation === "*" ||
    operation === "+" ||
    operation === "-"
  ) {
    let firstNum = rs.question("Please enter the first number: ");
    while (isNaN(firstNum)) {
      console.log("This is not a number");
      firstNum = rs.question("Please enter the first number: ");
    }
    firstNum = Number(firstNum);

    let secondNum = rs.question("Please enter the second number: ");
    while (isNaN(secondNum)) {
      secondNum = rs.question("Please enter the second number: ");
      console.log("This is not a number");
    }

    secondNum = Number(secondNum);

    let result;

    if (operation === "+") {
      result = firstNum + secondNum;
    } else if (operation === "-") {
      result = firstNum - secondNum;
    } else if (operation === "*") {
      result = firstNum * secondNum;
    } else if (operation === "/") {
      result = firstNum / secondNum;
    }

    console.log("Result: " + result);
  } else {
    console.log("That is not a valid operation");
  }
}
calculator();
