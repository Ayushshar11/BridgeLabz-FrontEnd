// Q7 – Smart Calculator
"use strict";
// Handles a list of operations on num1 and num2 using a switch, custom errors for invalid ops/div0/root negative

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

class InvalidOperationError extends Error {}
class MathDomainError extends Error {}

(function smartCalc(op) {
  try {
    let result;
    switch (op) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "divide":
        if (num2 === 0) throw new MathDomainError("Divide by zero");
        result = num1 / num2;
        break;
      case "power":
        result = Math.pow(num1, num2);
        break;
      case "root":
        if (num1 < 0) throw new MathDomainError("Root of negative number");
        result = Math.pow(num1, 1 / num2); // careful when num2==0 -> Infinity
        if (!isFinite(result)) throw new MathDomainError("Invalid root result");
        break;
      default:
        throw new InvalidOperationError(`Invalid operation: ${op}`);
    }
    console.log(`Operation: ${op} | num1=${num1} | num2=${num2} | Result=${result}`);
  } catch (err) {
    console.error(`Error for operation "${op}": ${err.name} - ${err.message}`);
  }
})(/* try: "add", "divide", "root", "power", "subtract", or an invalid op */ "divide");