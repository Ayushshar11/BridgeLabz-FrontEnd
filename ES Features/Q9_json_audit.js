// Q9 – JSON Audit
"use strict";
// Parse each raw JSON string with try...catch, detect missing keys, push valid entries to clean array.
// Convert age to Number and filter under-18 users as a bonus.

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}'
];

(function audit(list) {
  const clean = [];
  const errors = [];

  for (let i = 0; i < list.length; i++) {
    const line = list[i];
    try {
      const parsed = JSON.parse(line);
      if (!parsed.user || typeof parsed.age === "undefined") {
        throw new Error("Missing required keys 'user' or 'age'");
      }
      // Convert age to Number
      parsed.age = Number(parsed.age);
      if (Number.isNaN(parsed.age)) throw new TypeError("Invalid age number");

      clean.push(parsed);
    } catch (err) {
      errors.push({ line: i, raw: line, message: err.message });
    }
  }

  console.log("Clean entries:", clean);
  console.log("Errors (with line numbers):", errors);

  // Bonus: filter under 18 users
  const adults = clean.filter(u => u.age >= 18);
  console.log("Adults (>=18):", adults);
})(rawData);