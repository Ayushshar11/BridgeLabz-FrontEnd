// Q6 – Pyramid Pattern Generator
"use strict";
// Generates a simple pyramid pattern. Allows outer loop limit via user input (env var or default).
// Observations about var vs let are included as comments.

(function generate(limit) {
  // default limit = 5 if not provided
  limit = typeof limit === "number" && limit > 0 ? limit : 5;

  console.log("Q6 — Pyramid Pattern (limit = " + limit + ")");

  for (let i = 1; i <= limit; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "* ";
    }
    console.log(row.trim());
  }

  console.log("\nObservation: If 'let' is replaced by 'var' for loop variables, the variables leak to function scope in non-strict code, which can cause unexpected reuse across iterations.");
})(/* you can pass a number here to override default e.g., 4 */);