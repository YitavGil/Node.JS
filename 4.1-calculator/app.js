const yargs = require('yargs');
const calc = require('./calc.js');

const action = process.argv[2];
const a = yargs.argv.a;
const b = yargs.argv.b;
let result = "";

if ( action === "sum") {
    result = calc.summation(a , b);
  } else if (action === "sub") {
    result = calc.subtraction(a, b);
  } else if (action === "multiply") {
      result = calc.multiply(a, b);
  } else if (action === "divide") {
      result = calc.division(a,b);
  } else{
      result = "invalid input"
  }


  console.log(`${action} of  ${a} , ${b}: ${result}`)