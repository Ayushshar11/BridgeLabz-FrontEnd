// Q5 – Hoisting Lab: The Sequence Trap
"use strict";
// Original snippet had hoisting pitfalls. We'll explain and provide fixed versions and arrow-function variants.

console.log("Predicting hoisting behavior...");
// Explanation: var declarations are hoisted (initialized with undefined), function declarations are hoisted fully.
// let/const are hoisted but in TDZ (temporal dead zone) until initialization, calling before init throws ReferenceError.

// Fixed version:
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
function startGame() {
  console.log(status);
}

// Running in safe order
console.log(score);
announce();
startGame();

// Arrow-function rewrite (note: function declarations hoist, arrow function expressions assigned to const/let do not hoist)
const announceArrow = () => console.log("Game started (arrow)");
const startGameArrow = () => console.log(status);

// Demonstrate calling after definitions
announceArrow();
startGameArrow();

// Notes on hoisting:
// - 'var score' is hoisted and initially undefined if you refer before assignment.
// - function declarations are hoisted with their body, so they can be called before their definition.
// - arrow functions assigned to const/let are not hoisted; calling them before assignment causes ReferenceError.