// Q3 – Transaction Validator
"use strict";
// Loop transactions, throw and catch custom errors, categorize into arrays.
// Use Node/console friendly output. Include a comment for breakpoint.

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

class TransactionError extends Error {}
class NegativeAmountError extends TransactionError {}
class MissingFieldError extends TransactionError {}
class NullEntryError extends TransactionError {}

(function validate(txns) {
  const valid = [];
  const invalid = [];

  for (let i = 0; i < txns.length; i++) {
    try {
      const t = txns[i];
      // Example breakpoint comment for VS Code: // breakpoint: inspect t and i here
      if (t === null) throw new NullEntryError(`Null entry at index ${i}`);
      if (typeof t !== "object") throw new MissingFieldError(`Invalid type at index ${i}`);

      if (!('id' in t) || !('amount' in t)) throw new MissingFieldError(`Missing id or amount at index ${i}`);

      if (typeof t.amount !== "number") throw new TypeError(`Amount must be number at index ${i}`);

      if (t.amount < 0) throw new NegativeAmountError(`Negative amount for id ${t.id}`);

      // Passed validation
      valid.push(t);

    } catch (err) {
      // Categorize errors into invalid array with type label
      invalid.push({ index: i, error: err.name, message: err.message });
    }
  }

  console.log("Q3 — Transaction Validator Report");
  console.log("Valid transactions:", valid);
  console.log("Invalid transactions:", invalid);
  console.log(`Counts => Success: ${valid.length}, Failed: ${invalid.length}`);

  // Suggestion for breakpoint: set a breakpoint inside the try block to watch 't' and 'i'.
})(transactions);