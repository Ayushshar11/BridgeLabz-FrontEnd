// Q8 – Strict Mode Showdown
"use strict";
// Demonstrates behavior differences with duplicate parameters and illegal operations under strict mode.

function demoStrict(a, b) {
  // In strict mode, duplicate parameter names are not allowed in function declarations in some engines.
  // Also, assignment to undeclared globals is illegal (would throw elsewhere).
  let total = 10;
  // 'delete total' is illegal because delete can't delete local bindings. This will throw in strict mode.
  try {
    // delete total; // Uncommenting will cause a SyntaxError/TypeError in strict mode
    console.log("demoStrict ran successfully, total =", total);
  } catch (err) {
    console.error(err);
  }
}

demoStrict(5, 10);

// Non-strict correct example with ES6 rules:
function demoCorrect(a, b) {
  const total = 10;
  // properly avoid delete and avoid duplicate params
  console.log("demoCorrect total =", total);
}
demoCorrect(5, 10);