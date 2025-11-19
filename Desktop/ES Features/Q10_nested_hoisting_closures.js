// Q10 – Nested Hoisting and Closures
"use strict";
// Predict and explain output. Demonstrate hoisting contexts and arrow function variant.

function outer() {
  console.log("outer start - count (before var):", typeof count !== "undefined" ? count : "undefined");
  var count = 5;
  function inner() {
    console.log("inner start - count (before var):", typeof count !== "undefined" ? count : "undefined");
    var count = 10;
    console.log("inner after var count:", count);
  }
  inner();
  console.log("outer after inner, count:", count);
}

outer();

// Arrow function variant (note: using let/const to avoid var hoisting issues)
function outerArrow() {
  let count = 5;
  const innerArrow = () => {
    // this inner arrow won't hoist a separate 'var count' unless declared
    console.log("innerArrow sees outer count:", count);
  };
  innerArrow();
}
outerArrow();